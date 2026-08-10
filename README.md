# TijaHR

Employee management platform built for Tanzanian businesses.

## Pages in this project

- `/` — Marketing landing page
- `/dashboard` — HR/Admin dashboard
- `/dashboard/employee` — Employee (staff) dashboard
- `/directory` — Employee directory
- `/leave/request` — Leave request form

## Run this without installing anything on your computer

You do **not** need VS Code or Node.js installed locally. Use one of these free, browser-based options:

### Option A — StackBlitz (easiest)
1. Go to https://stackblitz.com
2. Click "Import from GitHub" (after you've pushed this project to GitHub — see below)
3. It installs and runs automatically in your browser, with a live preview

### Option B — GitHub's built-in web editor
1. Push this project to a GitHub repository (see steps below)
2. On your repo page, press the `.` key on your keyboard
3. GitHub opens a full VS Code editor in your browser — no install needed

### Option C — CodeSandbox
1. Go to https://codesandbox.io
2. "Import Project" → paste your GitHub repo URL

## Getting this project onto GitHub (do this first)

1. Create a new, empty repository on https://github.com (do not add a README there — this project already has one)
2. On your computer, in a terminal, from inside this project folder:
   ```
   git init
   git add .
   git commit -m "Initial TijaHR project"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. Replace `YOUR-USERNAME/YOUR-REPO-NAME` with your actual GitHub repo path

## Once open in a web editor

Run:
```
npm install
npm run dev
```
Then open the preview URL it gives you. Every page listed above will be live and clickable.
