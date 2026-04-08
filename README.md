# Calender

A React + Vite project that renders an interactive **wall calendar** UI with a fluid/animated background effect.

## Tech Stack
- React
- Vite
- JavaScript (ESM)

## Prerequisites
- Node.js (LTS recommended)
- npm (comes with Node.js)

## Install
```bash
# 1) clone
git clone https://github.com/jayanth-amujuri/Calender.git
cd Calender

# 2) install dependencies
npm install
```

## Dependencies
Installed via `npm install` (from `package.json`):

### Runtime
- `react`
- `react-dom`
- `three` (WebGL / 3D utilities used by the animated background)
- `gsap` (animation utilities)

### Dev
- `vite`
- `@vitejs/plugin-react`
- `eslint` + related plugins/config

## Run (Development)
Start the dev server (Hot Module Reload enabled):
```bash
npm run dev
```
Vite will print a local URL (commonly `http://localhost:5173`). Open it in your browser.

## Build
Create a production build:
```bash
npm run build
```

## Preview (Production build locally)
```bash
npm run preview
```

## Project Structure
- `index.html` - Vite entry HTML
- `src/main.jsx` - React entry point
- `src/App.jsx` - App layout (background + calendar)
- `src/components/Calendar.jsx` - Calendar UI + date range selection + notes inputs
- `src/components/LiquidEther.jsx` - Animated background effect

## Notes
- The calendar header images are loaded from Unsplash URLs inside `src/components/Calendar.jsx`. 
