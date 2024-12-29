import { useLocalStorage } from "@mantine/hooks";
import { Jeopardy } from "../types";

export function useJeopardy() {
  const [jeopardy, setJeopardy] = useLocalStorage<Jeopardy>({
    key: "jeopardy",
    defaultValue: { categories: [] },
  });

  return { jeopardy, setJeopardy };
}
