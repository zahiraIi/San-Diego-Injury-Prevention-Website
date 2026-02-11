# How to Add Events to the Website

This guide explains how to manage the events that appear on the SDIPP website. You'll use Notion (a free note-taking app) as your event calendar -- just add events to a Notion table and they'll automatically show up on the site.

---

## One-Time Setup (only do this once)

### Step 1: Create a Notion account

If you don't already have one, sign up for free at [notion.so](https://www.notion.so).

### Step 2: Create a Notion "integration" (this connects the website to Notion)

1. Open this link: **[notion.so/my-integrations](https://www.notion.so/my-integrations)**
2. Click the **"+ New integration"** button
3. Give it a name -- type `SDIPP Events`
4. Under **Associated workspace**, pick your Notion workspace from the dropdown
5. Under **Capabilities**, make sure **Read content** is checked (it should be by default)
6. Click **Submit**
7. You'll see a token that starts with `ntn_` -- **copy this and save it somewhere safe** (you'll need it in Step 5)

### Step 3: Create your Events table in Notion

1. In Notion, create a new **full-page database** (click `+ New page` > choose **Table**)
2. Name it something like "SDIPP Events"
3. Set up these columns (the names **must match exactly**, including capitalization):

| Column name     | Column type | What it's for                                    |
| --------------- | ----------- | ------------------------------------------------ |
| **Name**        | Title       | The event name (this column exists by default)   |
| **Date**        | Date        | When the event takes place                       |
| **Location**    | Text        | Where the event is (address or venue name)       |
| **Description** | Text        | A short description of the event                 |
| **URL**         | URL         | A link for more info or to RSVP (optional)       |
| **Status**      | Select      | Set to `Published` or `Draft` (see tip below)    |

> **Tip:** Only events with Status set to **Published** (or events with no Status set at all) will appear on the website. This lets you prepare events ahead of time as **Draft** and publish them when ready.

**How to add a column:** Click the **+** button at the top-right of the table, type the column name, then pick the type from the dropdown.

**How to set up Status options:** Click the Status column header > **Edit property** > under Options, add `Published` and `Draft`.

### Step 4: Give the website access to your table

1. Open your Events table in Notion
2. Click the **Share** button in the top-right corner
3. Click **Invite**
4. Search for `SDIPP Events` (the integration you created in Step 2)
5. Select it and click **Invite**

If you skip this step, the website won't be able to read your events.

### Step 5: Get your Database ID

1. Open your Events table in Notion as a full page
2. Look at the URL in your browser's address bar. It looks something like:
   ```
   https://www.notion.so/yourworkspace/abc123def456...?v=...
   ```
3. The long string of letters and numbers after your workspace name (before the `?`) is your **Database ID**
4. Copy it and save it -- you'll need it next

**Example:** If your URL is `https://www.notion.so/myteam/8a3b1c4d5e6f7890abcdef1234567890?v=...`, then your Database ID is `8a3b1c4d5e6f7890abcdef1234567890`.

### Step 6: Add your keys to the website

1. In the website project folder, find the file called `.env.local.example`
2. Make a copy of it and rename the copy to `.env.local`
3. Open `.env.local` in any text editor and fill in your values:

```
NOTION_API_KEY=ntn_paste_your_token_from_step_2_here
NOTION_DATABASE_ID=paste_your_database_id_from_step_5_here
```

4. Save the file

### Step 7: Verify it works

1. Open a terminal in the project folder and run:
   ```
   npm run dev
   ```
2. Open your browser and go to **http://localhost:3000/events**
3. You should see any Published events from your Notion table displayed as cards

---

## Day-to-Day Usage (adding and editing events)

Once setup is complete, managing events is simple -- just edit the Notion table:

- **To add an event:** Add a new row to your Notion table. Fill in the Name, Date, and any other details. Set Status to `Published` when you're ready for it to appear.
- **To hide an event:** Change its Status to `Draft` (or delete the row).
- **To edit an event:** Just edit the row in Notion. Changes appear on the website within a few minutes.
- **Past events are hidden automatically.** Only events dated today or in the future will show up.

---

## Troubleshooting

| Problem                                       | What to do                                                                                   |
| --------------------------------------------- | -------------------------------------------------------------------------------------------- |
| "Notion integration is not configured"        | Make sure you completed Step 6 -- both values must be filled in `.env.local`                |
| Events page shows an error                    | Make sure you shared the database with the integration (Step 4)                              |
| Events don't show up                          | Check that the event's Date is today or later, and Status is `Published` (or blank)          |
| Some fields are missing (no location, etc.)   | Make sure column names match exactly: `Name`, `Date`, `Location`, `Description`, `URL`, `Status` |
| Changes in Notion aren't showing up           | The website caches data for about 5 minutes -- wait a moment and refresh                     |

---

## For Developers

### How it works

The website pulls events from Notion through a simple pipeline:

```
Notion Table  -->  Website API  -->  Events Page
(your data)       (fetches data)     (displays cards)
```

### Key files

| File                                       | Purpose                                    |
| ------------------------------------------ | ------------------------------------------ |
| `src/lib/notion.ts`                        | Connects to Notion and fetches events      |
| `src/app/api/notion-events/route.ts`       | API endpoint (cached for 5 minutes)        |
| `src/components/ui/events-display.tsx`     | Renders the event cards on the page        |
| `src/app/events/page.tsx`                  | The Events page layout                     |

### Caching

The API caches Notion responses for **5 minutes** so the site stays fast and doesn't hit Notion's rate limits. In development mode (`npm run dev`), data refreshes on every page load.

### Changing column names

If you want to use different column names in your Notion table, update the property references in `src/lib/notion.ts` (search for `"Name"`, `"Date"`, `"Location"`, etc. and replace them with your column names).
