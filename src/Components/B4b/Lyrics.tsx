import { Flex } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { Song } from "../../types";
import { LyricCard } from "./LyricCard";

export type LyricNumber = 1 | 2 | 3 | 4 | 5 | 6;

export function Lyrics({
  song,
  reset,
  bombs,
  activeTeam,
  setActiveTeam,
}: {
  song: Song;
  reset: boolean;
  bombs: boolean[];
  activeTeam: number;
  setActiveTeam: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Flex wrap={"wrap"}>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <LyricCard
          isBomb={bombs[num - 1]}
          lyric={song[`lyric${num as LyricNumber}`]}
          number={num}
          key={num}
          reset={reset}
          activeTeam={activeTeam}
          setActiveteam={setActiveTeam}
        />
      ))}
    </Flex>
  );
}
