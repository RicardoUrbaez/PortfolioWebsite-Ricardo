# Ricardo Urbaez Portfolio

Personal portfolio built with React + Vite.

## Install and run locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customize content

Most portfolio content is centralized in:

- `src/data/profile.js`

Update this file to change:

- Hero text
- About summary
- Experience entries
- Featured projects
- Skills groups
- Contact links/details

Section components consuming this data are in `src/components/`.

## Deploy (Vercel)

This project includes `vercel.json` and can be deployed on Vercel.

### Option A: Vercel Dashboard

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Keep defaults:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

## Notes

- Resume download points to `public/Resume/Resume___Ricardo_Urbaez (2).pdf`.
- Contact form uses EmailJS credentials in `src/components/ContactMe.jsx`; update these values from your EmailJS dashboard if needed.
