import { NextRequest, NextResponse } from "next/server";

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  htmlLink?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { calendarId } = await request.json();

    // Get API key from environment variables
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
    const defaultCalendarId = process.env.GOOGLE_CALENDAR_ID || calendarId;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Google Calendar API key not configured" },
        { status: 500 }
      );
    }

    if (!defaultCalendarId) {
      return NextResponse.json(
        { error: "Calendar ID not provided" },
        { status: 400 }
      );
    }

    // Calculate timeMin (current time) and timeMax (3 months from now)
    const now = new Date();
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);

    const timeMin = now.toISOString();
    const timeMax = threeMonthsLater.toISOString();

    // Fetch events from Google Calendar API
    const url = new URL("https://www.googleapis.com/calendar/v3/calendars/" + encodeURIComponent(defaultCalendarId) + "/events");
    url.searchParams.append("key", apiKey);
    url.searchParams.append("timeMin", timeMin);
    url.searchParams.append("timeMax", timeMax);
    url.searchParams.append("maxResults", "10");
    url.searchParams.append("singleEvents", "true");
    url.searchParams.append("orderBy", "startTime");

    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Google Calendar API error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch calendar events", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform the events to match our interface
    const events: CalendarEvent[] = (data.items || []).map((item: any) => ({
      id: item.id,
      summary: item.summary || "Untitled Event",
      description: item.description,
      start: item.start,
      end: item.end,
      location: item.location,
      htmlLink: item.htmlLink,
    }));

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Error in calendar API route:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

