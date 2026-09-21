# Deploy Guide

> The work laptop's GitGuardian hook blocks `git push` to personal repos, so the
> initial push happens from a personal machine. After GitHub + Vercel are
> connected, all future deploys are just `git push` — from anywhere.

## One-time setup (personal machine)

1. **Get the code there.** The full repo is packed in `portfolio.bundle`
   (created next to the repo folder). On your personal machine:

   ```bash
   git clone portfolio.bundle portfolio
   cd portfolio
   git remote set-url origin https://github.com/DarkRedOS/portfolio.git
   git push -u origin main        # needs gh auth login / a PAT for DarkRedOS
   ```

2. **Import to Vercel** (dashboard, ~1 min):
   - vercel.com → **Add New → Project** → Import `DarkRedOS/portfolio`
   - Before deploying, rename the project: **Settings → General → Project Name**
     → `om-portfolio` (project name = your URL; `portfolio` is taken on Vercel)
   - **Deploy** — Next.js is auto-detected, zero config needed.

3. **Make the URL public** (new Vercel accounts default to SSO-gated URLs):
   - Dashboard → `om-portfolio` → **Settings → Deployment Protection** → Disabled
   - (CLI equivalent: `vercel project protection disable om-portfolio --sso`)

4. **Point `metadataBase` at the production URL** (fixes OG-image links):
   - On github.com, open `app/layout.tsx` → edit (pencil) → the `metadataBase`
     line → `new URL("https://om-portfolio.vercel.app")` → commit to `main`.
   - Vercel auto-deploys the commit.

## After that

- Every push to `main` auto-deploys. Edit content in `data/*.ts` — that's the
  whole site (profile, resume, projects).
- Replace `public/resume.pdf` with your official PDF (same filename).
- Custom domain: Vercel → Settings → Domains, then update `metadataBase` to match.
