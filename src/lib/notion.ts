import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NotionEvent {
  id: string;
  name: string;
  date: string | null;
  endDate: string | null;
  location: string | null;
  description: string | null;
  url: string | null;
  status: string | null;
}

/** Shape returned by POST /v1/databases/{id}/query */
interface NotionQueryResponse {
  object: "list";
  results: PageObjectResponse[];
  has_more: boolean;
  next_cursor: string | null;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getProperty(
  props: PageObjectResponse["properties"],
  key: string
): PageObjectResponse["properties"][string] | undefined {
  return props[key];
}

function getRichTextValue(props: PageObjectResponse["properties"], key: string): string | null {
  const prop = getProperty(props, key);
  if (prop && prop.type === "rich_text" && prop.rich_text.length > 0) {
    return prop.rich_text.map((rt) => rt.plain_text).join("");
  }
  return null;
}

function getTitleValue(props: PageObjectResponse["properties"], key: string): string {
  const prop = getProperty(props, key);
  if (prop && prop.type === "title" && prop.title.length > 0) {
    return prop.title.map((t) => t.plain_text).join("");
  }
  return "Untitled Event";
}

function getDateValue(
  props: PageObjectResponse["properties"],
  key: string
): { start: string | null; end: string | null } {
  const prop = getProperty(props, key);
  if (prop && prop.type === "date" && prop.date) {
    return { start: prop.date.start, end: prop.date.end };
  }
  return { start: null, end: null };
}

function getUrlValue(props: PageObjectResponse["properties"], key: string): string | null {
  const prop = getProperty(props, key);
  if (prop && prop.type === "url") {
    return prop.url;
  }
  return null;
}

function getSelectValue(props: PageObjectResponse["properties"], key: string): string | null {
  const prop = getProperty(props, key);
  if (prop && prop.type === "select" && prop.select) {
    return prop.select.name;
  }
  return null;
}

// ─── Query ───────────────────────────────────────────────────────────────────

/**
 * Fetches upcoming events from a Notion database.
 *
 * Uses the Notion REST API directly (POST /v1/databases/{id}/query) because
 * the @notionhq/client v5 SDK moved databases.query to dataSources.query,
 * which hits a different endpoint that doesn't work with traditional databases.
 *
 * Expected Notion database properties:
 *   - Name        (title)      – Event name
 *   - Date        (date)       – Event date (start + optional end)
 *   - Location    (rich_text)  – Event location
 *   - Description (rich_text)  – Short description
 *   - URL         (url)        – Optional link for more details
 *   - Status      (select)     – "Published" / "Draft" (optional filter)
 *
 * @param limit  Maximum number of events to return (default 20).
 */
export async function fetchNotionEvents(limit: number = 20): Promise<NotionEvent[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey) {
    throw new Error("NOTION_API_KEY environment variable is not set");
  }
  if (!databaseId) {
    throw new Error("NOTION_DATABASE_ID environment variable is not set");
  }

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // Query the Notion database directly via REST API
  const response = await fetch(
    `https://api.notion.com/v1/databases/${encodeURIComponent(databaseId)}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_size: limit,
        sorts: [
          {
            property: "Date",
            direction: "ascending",
          },
        ],
        filter: {
          and: [
            {
              property: "Date",
              date: {
                on_or_after: today,
              },
            },
          ],
        },
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Notion API error:", response.status, errorBody);
    throw new Error(`Notion API returned ${response.status}: ${errorBody}`);
  }

  const data = (await response.json()) as NotionQueryResponse;

  // Map Notion pages to our event shape
  const events: NotionEvent[] = data.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const props = page.properties;
      const date = getDateValue(props, "Date");

      return {
        id: page.id,
        name: getTitleValue(props, "Name"),
        date: date.start,
        endDate: date.end,
        location: getRichTextValue(props, "Location"),
        description: getRichTextValue(props, "Description"),
        url: getUrlValue(props, "URL"),
        status: getSelectValue(props, "Status"),
      };
    })
    // Only show published events (or events without a Status column)
    .filter((event) => !event.status || event.status === "Published");

  return events;
}
