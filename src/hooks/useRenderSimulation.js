import { useMemo, useState } from "react";

export function useRenderSimulation(example) {
  const [pulse, setPulse] = useState(0);

  const counters = useMemo(() => {
    const bad = Object.fromEntries(example.badComponents.map((name) => [name, pulse]));
    const good = Object.fromEntries(example.goodComponents.map((name) => [name, pulse]));
    return { bad, good };
  }, [example.badComponents, example.goodComponents, pulse]);

  const trigger = () => setPulse((value) => value + 1);

  return {
    pulse,
    counters,
    trigger,
    hasTriggered: pulse > 0,
  };
}
