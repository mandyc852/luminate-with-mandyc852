# Luminate with Mandy C

A landing page for the 7-minute subconscious recalibration audio offer.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure ConvertKit:
   - Create a form in your ConvertKit dashboard: https://app.convertkit.com/forms
   - Copy the form ID
   - Create a `.env.local` file:
   ```bash
   CONVERTKIT_FORM_ID=your_form_id_here
   CONVERTKIT_API_KEY=pODPwFSIDilb7gBuh2wERA
   ```

3. Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3001`

## ConvertKit Integration

The form submission is integrated with ConvertKit. When users submit their email:
- They are added to your ConvertKit form
- Custom fields are set (source_page, source_placement)
- First name is included if provided

## Project Structure

- `app/page.tsx` - Main landing page
- `app/api/waitlist/route.ts` - ConvertKit API integration
- `public/` - Images (Mandy's photos)

## Deployment

This is a Next.js app that can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

Make sure to set the environment variables in your hosting platform's dashboard.
