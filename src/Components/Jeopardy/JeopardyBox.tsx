import { Flex, Paper, Stack, Text } from "@mantine/core";
import { useState } from "react";
import "./Box.css";

export function JeopardyBox({
  imageSrc,
  question,
  isCategory = false,
}: {
  imageSrc: string;
  question: string;
  isCategory?: boolean;
}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Flex
      className={`flip-card1 ${isClicked || isCategory ? "flipped1" : ""}`}
      id="card1"
      onClick={() => handleClick()}
      w={"200px"}
      h={"111px"}
    >
      <Paper withBorder className="flip-card-inner1">
        <Stack className="flip-card-front1">
          <Flex
            style={{
              backgroundImage: `url(/${imageSrc})`,
              backgroundSize: "contain",
            }}
            h={"111px"}
            w={"200px"}
          ></Flex>
        </Stack>

        <Flex className={`flip-card-back1`}>
          <Text size={isCategory ? "30px" : "20px"} fw={"bolder"}>
            {question}
          </Text>
        </Flex>
      </Paper>
    </Flex>
  );
}
