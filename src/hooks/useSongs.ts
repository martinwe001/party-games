import { useLocalStorage } from "@mantine/hooks";
import { Song } from "../types";

export function useSongs() {
  const [songs, setSongs] = useLocalStorage<Song[]>({
    key: "songs",
    defaultValue: [],
  });
  return { songs, setSongs };
}
