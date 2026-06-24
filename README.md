# Manish Portfolio - 3D Project Book

A modern personal portfolio section built with **React**, **Tailwind CSS**, and **3D page-flip animation**.
This project showcases my featured builds in an interactive animated book layout where each page contains project details, tech stack, highlights, and navigation controls.

## Live Preview

Coming Soon

## Features

* 3D animated project book
* Auto preview animation when the book appears on screen
* Fast page-flip animation
* Hover to pause animation
* Keyboard navigation using left and right arrow keys
* Keyboard controls activate only when mouse is on the book
* Outer left and right navigation arrows
* Responsive book scaling for mobile screens
* Project cards with title, description, tech stack, type, status and highlight
* Optional page-flip sound effect
* Clean modern UI with Tailwind CSS
* Dark theme friendly design

## Tech Stack

* React.js
* Tailwind CSS
* JavaScript
* Lucide React Icons
* Vite

## Project Showcase Data

The project data contains:

* Project number
* Project title
* Short subtitle
* Description
* Tech stack
* Project type
* Status
* Highlight
* GitHub link
* Live demo link
* Gradient theme

Example:

```js
{
  no: "01",
  title: "Stack Stories",
  small: "AI-Powered Blog Platform",
  desc: "A full-stack blogging platform with AI content generation, secure JWT authentication, admin dashboard, blog management, comments control and MongoDB database integration.",
  tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI"],
  type: "Full Stack",
  status: "Completed",
  highlight: "AI content generation with admin control",
  github: "https://github.com/yourusername/stack-stories",
  live: "https://your-live-link.com",
  gradient: "from-cyan-400 via-blue-500 to-purple-500",
}
```

## Main Projects Included

### 1. Stack Stories

An AI-powered full-stack blog platform with admin dashboard, JWT authentication, MongoDB integration and AI content generation.

### 2. AI Hospital Email Router

An AI healthcare project that analyzes patient messages, detects intent and urgency, and routes emails to the correct hospital department such as Emergency, OPD, Billing, Pharmacy or Doctor Support.

### 3. Expense Tracker

A personal finance dashboard for tracking expenses, viewing summaries and managing financial data with a clean UI.

### 4. Local AI Chatbot

A lightweight local chatbot built with LLM integration and a clean interface.

## Folder Structure

```txt
src/
├── components/
│   ├── ProjectBook3D.jsx
│   ├── ProjectCard.jsx
│   ├── TechStackPage.jsx
│   └── SectionTitle.jsx
├── pages/
│   └── Builds.jsx
├── assets/
└── App.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/your-repository-name.git
```

Go to the project folder:

```bash
cd your-repository-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Required Packages

Install Lucide icons:

```bash
npm install lucide-react
```

Tailwind CSS should already be configured in the project.

## Optional Sound Setup

To enable page flip sound, add a sound file inside the `public` folder:

```txt
public/page-flip.mp3
```

The sound may play only after user interaction because modern browsers block autoplay audio before interaction.

## Usage

Import the 3D book component:

```jsx
import ProjectBook3D from "./ProjectBook3D";
```

Pass the project data:

```jsx
<ProjectBook3D projects={projects} />
```

## Controls

| Control              | Action                                |
| -------------------- | ------------------------------------- |
| Right Arrow Button   | Next project                          |
| Left Arrow Button    | Previous project                      |
| Keyboard Right Arrow | Next project                          |
| Keyboard Left Arrow  | Previous project                      |
| Hover on Book        | Pause animation and activate keyboard |
| Mouse Leave          | Resume normal behavior                |

## Responsive Behavior

On mobile screens, the book keeps its original layout and scales down instead of breaking the page layout.
This keeps the same 3D design, animation, and card structure across devices.

## Author

**Manish Rauniyar**

* GitHub: https://github.com/yourusername
* LinkedIn: https://linkedin.com/in/yourusername
* Email: [manishgupt7255@gmail.com](mailto:manishgupt7255@gmail.com)

## Status

This portfolio section is currently in development and can be improved further with:

* Real GitHub links
* Live demo links
* More project pages
* Better mobile animation tuning
* Framer Motion enhancements
* Project image previews

## License

This project is open-source and available for learning, portfolio and personal use.
