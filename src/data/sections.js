import {
  Blocks,
  ChartNoAxesColumnIncreasing,
  CheckSquare,
  GitBranch,
  Home,
  Layers3,
  ListTree,
  MousePointerClick,
  Route,
  Share2,
} from "lucide-react";
import { examples } from "./examples";

export const navSections = [
  { title: "Overview", path: "/", icon: Home },
  { title: "Big Components", path: examples.bigComponents.path, icon: Blocks },
  { title: "State Placement", path: examples.statePlacement.path, icon: Route },
  { title: "Props Drilling", path: examples.propsDrilling.path, icon: GitBranch },
  { title: "Memoization Trap", path: examples.memoizationTrap.path, icon: Layers3 },
  { title: "Shared State", path: examples.sharedState.path, icon: Share2 },
  { title: "Slow Lists", path: examples.slowLists.path, icon: ListTree },
  { title: "Interaction Boundaries", path: examples.interactionBoundaries.path, icon: MousePointerClick },
  { title: "Maintainability", path: examples.maintainability.path, icon: ChartNoAxesColumnIncreasing },
  { title: "Final Checklist", path: "/final-checklist", icon: CheckSquare },
];

export const finalChecklist = [
  "Does this component own too much?",
  "Is state living too high?",
  "Are props passing through unused components?",
  "Does one interaction re-render unrelated UI?",
  "Is shared state too broad?",
  "Are list items isolated?",
  "Are memo hooks hiding bad design?",
  "Can a new developer understand data flow?",
  "Does the component boundary match user behavior?",
];
