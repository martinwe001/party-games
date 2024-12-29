import { ActionIcon, Flex, Paper, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { MdClose } from "react-icons/md";
import { Song } from "../../types";
import { LyricNumber } from "./Lyrics";

export function SongComponent({ song }: { song: Song }) {
  const [songs, setSongs] = useLocalStorage<Song[]>({
    key: "songs",
    defaultValue: [],
  });

  const deleteSong = (id: string) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <Flex w={"100%"} justify={"center"} align={"center"} gap={"lg"}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Paper withBorder p={"md"} miw={"80px"}>
          <Flex w={"70px"} h={"30px"} align={"center"} justify={"center"}>
            <Text size="30px">{song[`lyric${num as LyricNumber}`]}</Text>
          </Flex>
        </Paper>
      ))}
      <Flex pl={"lg"}>
        <ActionIcon
          onClick={() => deleteSong(song.id)}
          variant="transparent"
          c={"black"}
        >
          <MdClose />
        </ActionIcon>
      </Flex>
    </Flex>
  );
}
