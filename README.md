# React Boundary Lab

React Boundary Lab is a professional interactive learning app that teaches developers why React performance problems often begin with unclear component boundaries, not missing memoization.

GitHub: https://github.com/masaud155/react-boundary-lab

## Features

- Dark mode developer education dashboard
- Responsive sidebar, header, main content, and insight panel
- Ten learning sections covering real React boundary smells
- Bad vs good architecture comparisons
- Animated re-render indicators and render counters
- Component tree visualizations
- Before/after JSX code panels
- Practical takeaways and checklist prompts
- Final project checklist card

## Tech Stack

- React
- Vite
- JavaScript JSX
- Tailwind CSS
- shadcn/ui-inspired component styling
- lucide-react icons
- React Router
- Zustand-ready project structure

## Screenshots

Add screenshots here after running the app locally:

- Overview page
- Big Components simulation
- Slow Lists render counter
- Final Checklist

## Installation

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Learning Goals

- Understand why component boundaries affect render behavior
- Recognize state that is placed too high in the tree
- Identify props drilling that creates unnecessary dependencies
- Avoid using memoization as a substitute for architecture
- Split shared state by responsibility
- Isolate list rows and interaction areas
- Review maintainability as an early performance signal

## Folder Structure

```text
src/
  app/
    App.jsx
    routes.jsx
  components/
    layout/
      AppLayout.jsx
      Sidebar.jsx
      Header.jsx
    ui/
      MetricBadge.jsx
      WarningCard.jsx
      TakeawayCard.jsx
      CodeBlock.jsx
    learning/
      BadGoodComparison.jsx
      ComponentTree.jsx
      RenderCounterCard.jsx
      ReRenderSimulator.jsx
      BoundaryDiagram.jsx
      InsightPanel.jsx
      ChecklistCard.jsx
  pages/
    Overview.jsx
    BigComponents.jsx
    StatePlacement.jsx
    PropsDrilling.jsx
    MemoizationTrap.jsx
    SharedState.jsx
    SlowLists.jsx
    InteractionBoundaries.jsx
    Maintainability.jsx
    FinalChecklist.jsx
  data/
    sections.js
    examples.js
    codeSamples.js
  hooks/
    useRenderSimulation.js
  styles/
    index.css
  main.jsx
```

## Contribution Guide

1. Keep lessons concise and practical.
2. Add new examples through `src/data/examples.js`.
3. Keep JSX samples short enough to read inside the app.
4. Preserve responsive behavior for mobile and desktop.
5. Run `npm run build` before opening a pull request.
