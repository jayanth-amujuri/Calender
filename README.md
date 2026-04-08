# Calender

## Description
Calender is a **React + Vite** web app that shows a modern, hanging-style monthly calendar UI. You can navigate between months, click dates to select a range, and type quick notes. The page also includes an animated, interactive fluid background effect (built with **Three.js**) to give the UI a more dynamic look.

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

---

# Hanging Wall Calendar

A high-fidelity React calendar application that blends classic physical aesthetics with modern digital utility. By removing traditional dashboard sidebars, this project focuses entirely on a minimalist, centered "Hanging" UI that mimics a real-world spiral-bound calendar pinned to a wall.

## ✨ Features

- **Physical "Wall-Hanging" Design:** Engineered with a custom CSS-driven hanging hook, mounting nail, and 26-ring spiral binding for a realistic 3D effect.
- **Minimalist Centered Interface:** A distraction-free layout that centers the calendar on a textured "wall" background, utilizing a clean white-card aesthetic.
- **Interactive Date Selection:** Supports fluid range selection (Start and End dates) with active visual states and a distinctive highlight for "Today."
- **Monthly Lined Notes:** Each month features a dedicated, ruled-paper-style notes section for quick scratchpad entries.
- **Dynamic Visuals:** Integration with high-resolution monthly imagery that updates automatically as you navigate through the year.
- **Responsive Grid Logic:** Intelligent date calculation that includes "faded" fillers from previous months to ensure a perfectly balanced 7-column grid.

## 🛠️ Technical Stack

**React.js:** Functional components and advanced Hooks (`useState`, `useEffect`) for state and animation management.

**CSS3 Mastery:**
- **Skeuomorphism:** Created using `clip-path`, `drop-shadow` filters, and pseudo-elements without external image assets for the UI components.
- **Flexbox Layout:** Perfectly centered responsive positioning.
- **Transitions:** Smooth fade and translate animations for month-to-month navigation.

**Unsplash Integration:** Dynamic source for aesthetic monthly headers.

## 📸 Component Breakdown

- **The Hook & Wire:** Positioned at the absolute top, creating the illusion of gravity.
- **The Spiral Binding:** A loop of individual CSS elements that "pierce" the top of the calendar board.
- **The Image Header:** A large-format photo section with integrated month/year navigation controls.
- **The Paper Card:** A split-view containing the Lined Notes on the left and the Interactive Date Grid on the right.
