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
          <Stack
            className="flip-card-front"
            style={{
              backgroundImage: `url(https://t3.ftcdn.net/jpg/02/72/67/96/360_F_272679601_ReiKAFUY1xf9XituWgjkkrpTnxqrPlMh.jpg)`,
            }}
          >
            <Text size="100px" fw={"bolder"} className="lyric-number">
              {number}
            </Text>
          </Stack>

          <Flex
            className={`flip-card-back`}
            style={{
              backgroundImage: isBomb
                ? ""
                : `url(https://t3.ftcdn.net/jpg/02/72/67/96/360_F_272679601_ReiKAFUY1xf9XituWgjkkrpTnxqrPlMh.jpg)`,
              backgroundColor: isBomb ? "red" : "",
            }}
          >
            <Text
              size={lyric.length > 7 ? "40px" : "50px"}
              fw={"bolder"}
              className="lyric-number1"
              c={isBomb ? "white" : "#033382"}
            >
              {lyric}
            </Text>
          </Flex>
        </Paper>
      </Flex>
    </Flex>
  );
}
