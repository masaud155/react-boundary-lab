import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.jsx";
import Overview from "../pages/Overview.jsx";
import BigComponents from "../pages/BigComponents.jsx";
import StatePlacement from "../pages/StatePlacement.jsx";
import PropsDrilling from "../pages/PropsDrilling.jsx";
import MemoizationTrap from "../pages/MemoizationTrap.jsx";
import SharedState from "../pages/SharedState.jsx";
import SlowLists from "../pages/SlowLists.jsx";
import InteractionBoundaries from "../pages/InteractionBoundaries.jsx";
import Maintainability from "../pages/Maintainability.jsx";
import FinalChecklist from "../pages/FinalChecklist.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: "big-components", element: <BigComponents /> },
      { path: "state-placement", element: <StatePlacement /> },
      { path: "props-drilling", element: <PropsDrilling /> },
      { path: "memoization-trap", element: <MemoizationTrap /> },
      { path: "shared-state", element: <SharedState /> },
      { path: "slow-lists", element: <SlowLists /> },
      { path: "interaction-boundaries", element: <InteractionBoundaries /> },
      { path: "maintainability", element: <Maintainability /> },
      { path: "final-checklist", element: <FinalChecklist /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
