## library installed and configured

- NextJs 14 with TypeScript & AppRouter 
- Tailwind / SCSS
- prisma 
- supabase 
- NextAuthJS 
- nextI18n / Next intl
- NextTheme

## Getting Started with starter

Create .env file with this structure:

```bash
#SUPABASE CONFIG
DATABASE_URL=""
DIRECT_URL=""
AUTH_SECRET=""
PUBLIC_KEY=""

#ENVIRONNEMENT
NODE_ENV=development
API_URL=http://localhost:3000/api

#GOOGLE PROVIDER OAUTH
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

## Google ID

Open [Google cloud console](https://console.cloud.google.com/) for create Google ID and Google Client secret.

## Theme config & UI component

Go to [Shadcn theme](https://ui.shadcn.com/themes) for setting themes and [Shadcn component](https://ui.shadcn.com/docs/components/accordion) for components.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
