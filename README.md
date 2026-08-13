# Tiến Portfolio

A modern personal portfolio built with **React 19** and **Vite**, showcasing my projects, learning journey, and technical skills.

## 🌐 Live Demo

[View Live Portfolio](https://profolio-xi-pied.vercel.app/)

## 🛠️ Tech Stack

- **React 19** — UI development and state management
- **Vite** — Fast development and production build tooling
- **Lucide React** — Icon library
- **CSS** — Custom responsive styling

## ✨ Features

- Responsive and modern portfolio design
- Interactive navigation menu
- Light/dark theme switching
- Project tabs and project showcase
- Interactive learning slider
- Dialog and modal components
- Clipboard functionality
- Scroll-based animations using `IntersectionObserver`
- Component-based architecture with reusable React components

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/
│   ├── learning/
│   ├── overlays/
│   ├── projects/
│   ├── sections/
│   └── ui/
├── hooks/              # Reusable effects and IntersectionObserver logic
├── styles/             # Component and section styles
│   └── index.css
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Run linting

```bash
npm run lint
```

### 5. Build for production

```bash
npm run build
```

## 🧩 Architecture

The project follows a modular component-based architecture. UI elements, layouts, project sections, learning components, overlays, and reusable hooks are separated into dedicated directories to keep the codebase maintainable and scalable.

The application relies entirely on React state and event handling for interactive features, with proper effect cleanup for browser APIs such as `IntersectionObserver`.

No CDN dependencies or traditional DOM manipulation scripts are used.

## 📄 License

This project is intended for personal portfolio and educational purposes.
