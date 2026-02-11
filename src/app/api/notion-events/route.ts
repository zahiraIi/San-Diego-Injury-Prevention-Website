import { NextResponse } from "next/server";
import { fetchNotionEvents } from "@/lib/notion";

export const revalidate = 300; // ISR: revalidate every 5 minutes

export async function GET() {
  try {
    const events = await fetchNotionEvents(20);

    return NextResponse.json(
      { events },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Notion events:", error);

    const message =
      error instanceof Error ? error.message : "Unknown error";

    // Don't leak internal details in production
    const isConfigError =
      message.includes("NOTION_API_KEY") ||
      message.includes("NOTION_DATABASE_ID");

    return NextResponse.json(
      {
        error: isConfigError
          ? "Notion integration is not configured. Please set NOTION_API_KEY and NOTION_DATABASE_ID."
          : "Failed to fetch events",
      },
      { status: isConfigError ? 503 : 500 }
    );
  }
}
