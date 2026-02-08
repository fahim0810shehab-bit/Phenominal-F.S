# Be My Valentine? 🌹

A playful, interactive, and offline-ready Valentine's Day proposal app built with React, TypeScript, and Vite PWA.

## Features
- 📱 **Installable**: Can be installed on mobile (iOS/Android) and desktop.
- 🔌 **Offline Ready**: Works without an internet connection after the first visit.
- 🎨 **Playful UI**: Floating hearts, animated buttons, and a fun "No" button mechanic.

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd be-my-valentine
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:
```bash
npm run dev
```
Open your browser to the URL shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To build the app for deployment (this generates the Service Worker for offline support):
```bash
npm run build
```

To preview the built production version:
```bash
npm run preview
```

## Tech Stack
- React
- TypeScript
- Vite
- Vite PWA (Service Workers & Manifest)
- Tailwind CSS
