# OVZZ Motors Website

Modern car dealership website built with Next.js App Router, Tailwind CSS, Sanity CMS, Supabase, Zapier, and Vercel-ready deployment.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Sanity Studio mounted at `/studio`
- Supabase Postgres + Supabase Auth
- Zapier webhook integration for lead notification

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment file and fill values:

```bash
cp .env.example .env.local
```

3. Start development server:

```bash
npm run dev
```

4. Open:

- Website: http://localhost:3000
- Studio: http://localhost:3000/studio
- Admin Login: http://localhost:3000/admin/login

## Environment Variables

Required variables are listed in `.env.example`.

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ZAPIER_WEBHOOK_URL`
- `NEXT_PUBLIC_SITE_URL`
- `ADMIN_ALLOWED_EMAILS` (comma-separated, optional)

## Supabase Setup

Create leads table in Supabase SQL editor:

```sql
create table if not exists public.leads (
	id bigint generated always as identity primary key,
	name text not null,
	email text not null,
	phone text not null,
	message text not null,
	car_id text not null,
	created_at timestamptz not null default now()
);
```

## Sanity Setup

1. Ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set.
2. Start website and open `/studio`.
3. Create `Car` documents with required fields.

## Inquiry Flow

1. User submits inquiry from a car detail page.
2. Route handler `POST /api/inquiries` validates payload.
3. Lead is inserted into Supabase `leads` table.
4. A webhook payload is sent to Zapier when configured.

## Admin Protection

- `/studio` and `/admin/*` are protected by route proxy.
- Login uses Supabase Auth credentials through `POST /api/admin/login`.
- If `ADMIN_ALLOWED_EMAILS` is set, only listed emails can access admin routes.

## Quality Checks

```bash
npm run lint
npm run build
```
# ovzz-car-website
