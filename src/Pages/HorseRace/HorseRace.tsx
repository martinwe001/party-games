import { Button, Flex, Stack } from "@mantine/core";
import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router";
import { HorseRacer } from "./HorseRacer";

export function HorseRace() {
  const navigate = useNavigate();
  const [horseRacers, setHorseRacers] = useState<number[]>([0, 1, 2]);
  const [start, setStart] = useState<boolean>(false);
  const [finishers, setFinishers] = useState<number[]>([]);
  const [clear, setClear] = useState<boolean>(false);

  const startGame = () => {
    if (finishers.length > 0) {
      setFinishers([]);
      setStart(false);
      setClear(!clear);
    } else {
      setStart(true);
    }
  };

  return (
    <Stack w={"100vw"} align="center" justify="center">
      <Button
        style={{ position: "absolute", top: "1rem", left: "1rem" }}
        variant="transparent"
        c={"black"}
        leftSection={<MdChevronLeft />}
        onClick={() => navigate("/")}
      >
        Tilbake
      </Button>
      <Flex gap={0}>
        <Stack gap={0} w={"100%"} justify="center" align="center">
          {horseRacers.map((id) => (
            <HorseRacer
              start={start}
              key={id}
              racer={id}
              finishers={finishers}
              setFinishers={setFinishers}
              clear={clear}
            />
          ))}
        </Stack>
      </Flex>

      <Button
        bg={"white"}
        c={"black"}
        bd={"1px solid black"}
        w={"150px"}
        p={"sm"}
        onClick={startGame}
      >
        {finishers.length > 0 ? "Reset" : "Start"}
      </Button>
      <Flex gap={"md"}>
        <Button
          bg={"green"}
          c={"white"}
          w={"150px"}
          p={"sm"}
          onClick={() =>
            setHorseRacers(
              horseRacers.concat([horseRacers[horseRacers.length - 1] + 1])
            )
          }
        >
          Add racer
        </Button>
        <Button
          bg={"red"}
          c={"white"}
          w={"150px"}
          onClick={() => {
            if (horseRacers.length > 2) {
              setHorseRacers(horseRacers.slice(0, horseRacers.length - 1));
            }
          }}
        >
          Remove racer
        </Button>
      </Flex>
    </Stack>
  );
}
