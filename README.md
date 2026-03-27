# Personal Developer Portfolio

VS Code-inspired personal portfolio built with React and Vite.

## Features

- File tree sidebar with active file indicator and gradient accent
- Dynamic tabs that open as files are selected
- Rich editor panels for README, projects, skills, education, and contact
- Skill badges grouped by category (languages, ML/AI stack, tools)
- Academic timeline layout for education and activities
- Status bar with active file and live clock
- Mobile responsive layout with a hamburger-triggered sidebar
- CSS Modules architecture with component-level styles

## Tech Stack

- React
- Vite
- CSS Modules

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally

## Project Structure

```text
src/
	components/
		Sidebar.jsx
		TabBar.jsx
		Editor.jsx
		StatusBar.jsx
		TaglineCard.jsx
		panels/
			ReadMe.jsx
			Projects.jsx
			Skills.jsx
			Education.jsx
			Contact.jsx
	styles/
		App.module.css
		Sidebar.module.css
		TabBar.module.css
		Editor.module.css
		StatusBar.module.css
		TaglineCard.module.css
		ReadMe.module.css
		Projects.module.css
		Skills.module.css
		Education.module.css
		Contact.module.css
		global.css
	data/
		resume.js
	App.jsx
	main.jsx
```
