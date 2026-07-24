# Sidharth S — Portfolio

Built with React + Vite + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or GitHub Pages.

## Structure

- `src/data/content.js` — all resume/project text lives here. Edit this file to update copy.
- `src/components/` — one component per section (Hero, About, Skills, Projects, Certifications, Contact).
- `src/components/NodeNetwork.jsx` — the animated skill-graph in the hero background.
- Colors and fonts are defined as design tokens in `tailwind.config.js`.
