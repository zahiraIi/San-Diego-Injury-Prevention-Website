# Google Calendar API Setup Guide

## Prerequisites
1. A Google account
2. A Google Calendar that you want to display events from

## Setup Steps

### 1. Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click on it and press "Enable"

### 2. Create an API Key
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key
4. (Recommended) Restrict the API key:
   - Click on the API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Calendar API"
   - Save

### 3. Get Your Calendar ID
There are several ways to find your Calendar ID:

**Option A: Public Calendar (Recommended for public events)**
1. Go to Google Calendar
2. Find the calendar you want to use
3. Click the three dots next to it > "Settings and sharing"
4. Scroll down to "Integrate calendar"
5. Copy the "Calendar ID" (usually in format: `your-email@gmail.com` or a custom ID)

**Option B: Make Calendar Public**
1. Go to Google Calendar
2. Find the calendar you want to use
3. Click the three dots next to it > "Settings and sharing"
4. Under "Access permissions", check "Make available to public"
5. Copy the "Calendar ID" from "Integrate calendar" section

### 4. Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Add your API key and Calendar ID:
   ```
   GOOGLE_CALENDAR_API_KEY=your_actual_api_key
   GOOGLE_CALENDAR_ID=your_calendar_id
   ```

### 5. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to the Events section
3. Events from your Google Calendar should appear

## Security Notes
- Never commit `.env.local` to version control (it's already in `.gitignore`)
- For production, add these environment variables to your hosting platform (Vercel, Netlify, etc.)
- Consider restricting your API key to only allow requests from your domain

## Troubleshooting
- **No events showing**: Check that your calendar is public or that the API key has proper permissions
- **API errors**: Verify your API key is correct and the Calendar API is enabled
- **CORS errors**: The API route runs server-side, so CORS shouldn't be an issue

