# ConvertKit Setup Instructions

## Step 1: Get Your Form ID

1. Go to your ConvertKit dashboard: https://app.convertkit.com/forms
2. Create a new form (or use an existing one)
3. Click on the form to view its details
4. The Form ID is in the URL: `https://app.convertkit.com/forms/{FORM_ID}/...`
   - Or look for it in the form settings/integration section

## Step 2: Configure Environment Variable

Create a `.env.local` file in the root of the project:

```bash
CONVERTKIT_FORM_ID=your_form_id_here
CONVERTKIT_API_KEY=pODPwFSIDilb7gBuh2wERA
```

**Note:** The API key is already hardcoded in the code, but you can override it with the environment variable if needed.

## Step 3: Test the Integration

1. Start the dev server: `npm run dev`
2. Visit `http://localhost:3001`
3. Submit the form with a test email
4. Check your ConvertKit dashboard to confirm the subscriber was added

## What Gets Sent to ConvertKit

- **Email** (required)
- **First Name** (optional, if provided)
- **Custom Fields:**
  - `source_page`: "luminate"
  - `source_placement`: "opt-in-form"

## Troubleshooting

If you see "Form not configured" error:
- Make sure you've set `CONVERTKIT_FORM_ID` in `.env.local`
- Restart the dev server after adding the environment variable
- Check that the form ID is correct (it's usually a number)

If subscriptions aren't working:
- Check the server console for error messages
- Verify your API key is correct
- Make sure the form ID matches an existing form in your ConvertKit account
