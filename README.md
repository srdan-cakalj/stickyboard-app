# StickyBoard App

A desktop-focused React sticky notes app for organizing tasks across multiple boards. The app supports draggable notes, board management, date-based filtering, search, completed notes, theme switching, and persistent data with `localStorage`.

## Live Demo

https://srdan-cakalj.github.io/stickyboard-app/

## Screenshots

### Main Board - Light Theme
![Main board light theme](screenshots/main-light.png)

### Main Board - Dark Theme
![Main board dark theme](screenshots/main-dark.png)

### Date Filter
![Date filter view](screenshots/filter-dark.png)

### Search
![Search view](screenshots/search-dark.png)

## Features

- Create, rename, select, and delete boards
- Add sticky notes to the active board
- Drag notes around the board using Framer Motion
- Edit note title and content directly on the sticky note
- Change sticky note color
- Add date and time to notes
- Filter dated notes by:
  - all dated notes
  - next 3 days
  - next 10 days
  - next 30 days
- Search notes by title across all boards
- Mark notes as completed
- View completed notes in a separate checked notes panel
- Hide or show the checked notes panel
- Delete all completed notes with confirmation
- Reset the app with confirmation
- Switch between light and dark theme
- Save boards, notes, theme, filters, and UI preferences in `localStorage`

## Tech Stack

- React
- JavaScript
- CSS Modules
- Framer Motion
- Vite
- LocalStorage

## What I Practiced

This project helped me practice building a larger interactive React application with multiple connected UI states. The main focus was not only rendering components, but also managing how boards, sticky notes, filters, modals, and settings work together.

Important parts of the implementation include:

- React state management with hooks and Context API
- Splitting the UI into reusable components
- Managing nested state for boards and stickers
- Building reusable modal logic
- Handling drag-and-drop behavior with Framer Motion
- Saving and loading app state from `localStorage`
- Creating a theme system with CSS variables
- Building a custom date and time input flow
- Handling search and filter views across multiple boards
- Improving UI behavior through hover states, animations, and conditional rendering

## Project Structure

```txt
src/
├── components/
│   ├── app-modals/
│   ├── header/
│   └── main/
├── contexts/
├── helper-functions/
├── icons/
├── providers/
├── templates/
├── App.jsx
├── AppContent.jsx
└── main.jsx
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/srdan-cakalj/stickyboard-app.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

This is a portfolio project built to practice React UI development, component organization, state management, and interactive behavior. The app is optimized for desktop use.
