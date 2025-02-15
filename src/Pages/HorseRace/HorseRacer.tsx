import { Flex, Image, Title } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function HorseRacer(props: {
  start: boolean;
  racer: number;
  finishers: number[];
  setFinishers: Dispatch<SetStateAction<number[]>>;
  clear: boolean;
}) {
  const { start, racer, finishers, setFinishers, clear } = props;
  const [position, setPosition] = useState<number>(-50);

  useEffect(() => {
    setPosition(-50);
  }, [clear]);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        setPosition((prev) => {
          const newPosition = prev + Math.floor(Math.random() * 1) + 1;
          if (newPosition > 1000) {
            setFinishers((prev1) => {
              if (!prev1.includes(racer)) {
                return [...prev1, racer];
              }
              return prev1;
            });

            clearInterval(interval); // Stop interval when position reaches 1000
            return 1000;
          }
          return newPosition;
        });
      }
    }, 1);

    return () => clearInterval(interval); // Cleanup on unmount or when start changes
  }, [start]);

  return (
    <Flex w={"1200px"} gap={0}>
      <Flex
        w={"1100px"}
        bg={"green"}
        style={{ borderBottom: "3px solid white" }}
        h={"60px"}
      >
        <Flex
          bg={"green"}
          h={"60px"}
          w={"100px"}
          style={{
            borderBottom: "3px solid white",
            borderRight: "3px solid white",
          }}
          align={"center"}
        >
          <Title order={1} w={"20px"} ml={"sm"} c={"white"}>
            {racer + 1}
          </Title>
        </Flex>
        <Image
          src={"/horse.png"}
          mah={"30px"}
          w={"50px"}
          fit="contain"
          style={{
            position: "relative",
            left: `${position}px`,
            bottom: "-20px",
          }}
        />
      </Flex>
      <div
        style={{
          backgroundImage: `url(https://flagloft.com/wp-content/uploads/2022/09/CHECKERED.jpg)`,
          width: "20px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      {finishers.indexOf(racer) !== -1 && (
        <Title order={1} pl={"xl"} w={"20px"}>
          {finishers.indexOf(racer) + 1}
        </Title>
      )}
    </Flex>
  );
}
