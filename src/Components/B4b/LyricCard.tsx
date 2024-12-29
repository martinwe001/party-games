import { Flex, Paper, Stack, Text } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Lyric.css";

export function LyricCard({
  lyric,
  number,
  isBomb,
  reset,
  activeTeam,
  setActiveteam,
}: {
  lyric: string;
  number: number;
  isBomb: boolean;
  reset: boolean;
  activeTeam: number;
  setActiveteam: Dispatch<SetStateAction<number>>;
}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
    if (isBomb) {
      setActiveteam(activeTeam === 1 ? 2 : 1);
    }
  };

  useEffect(() => {
    setIsClicked(false);
  }, [reset]);

  return (
    <Flex justify={"center"} align={"center"}>
      <Flex
        className={`flip-card ${isClicked ? "flipped" : ""}`}
        id="card"
        onClick={() => handleClick()}
        w={"200px"}
        h={"200px"}
      >
        <Paper withBorder className="flip-card-inner">
          <Stack className="flip-card-front">
            <Text size="50px" fw={"bolder"} c={"black"}>
              {number}
            </Text>
          </Stack>

          <Flex className={`flip-card-back`} bg={isBomb ? "red" : "white"}>
            <Text size="50px" fw={"bolder"} c={"black"}>
              {lyric}
            </Text>
          </Flex>
        </Paper>
      </Flex>
    </Flex>
  );
}
