
# GitHub Copilot Instructions – React.js Project

## 1. General Development Guidelines
- Act as a senior React.js developer and maintainable-code reviewer.
- Follow industry-standard React.js best practices.
- Before making changes, understand the existing project structure and coding patterns.
- Reuse existing components, utilities, hooks, and services wherever possible.
- Do not introduce unnecessary dependencies or libraries.
- Do not rewrite existing code unless required.
- Prefer simple, readable, reusable, and maintainable solutions.
- Follow the existing JavaScript or TypeScript conventions of the project.

## 2. React.js Coding Standards
- Use functional components instead of class components.
- Use React Hooks for state and lifecycle management.
- Follow the Rules of Hooks.
- Keep components small, focused, and reusable.
- Separate business logic from UI rendering.
- Avoid deeply nested conditional rendering.
- Use early returns wherever appropriate.
- Avoid unnecessary use of useEffect.
- Use controlled components for forms when appropriate.
- Use proper React keys when rendering lists.
- Never mutate state directly.
- Avoid unnecessary prop drilling; use the existing state management solution.

## 3. Component Architecture
- Follow a modular and component-based architecture.
- Keep components responsible for a single purpose.
- Separate reusable UI components from feature-specific components.
- Move reusable business logic into custom hooks.
- Keep API calls outside presentation components.
- Use a consistent folder and file naming convention.
- Avoid creating duplicate components or utilities.

## 4. JavaScript / TypeScript
- Prefer modern ES6+ JavaScript features.
- Use async/await instead of unnecessary Promise chaining.
- Use const by default and let when reassignment is needed.
- Avoid var.
- Avoid unnecessary type conversions.
- If TypeScript is configured, use proper interfaces and types.
- Avoid using any in TypeScript unless absolutely necessary.
- Handle null and undefined values safely.
- Avoid hardcoded values; use constants or configuration files.