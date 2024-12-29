import { Button, Flex, Stack } from "@mantine/core";
import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router";
import { useSongs } from "../../hooks/useSongs";
import { Lyrics } from "./Lyrics";

const shuffleArray = (array: boolean[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function B4bGame() {
  const navigate = useNavigate();
  const { songs } = useSongs();
  const [reset, setReset] = useState<boolean>(false);
  const [activeTeam, setActiveTeam] = useState<number>(1);
  const [activeSong, SetActiveSong] = useState<number>(0);
  const [bombs, setBombs] = useState<boolean[]>(
    shuffleArray([true, true, false, false, false, false])
  );

  const randomizeBombs = () => {
    return shuffleArray(bombs);
  };

  const handleGoNext = () => {
    if (activeSong === songs.length - 1) {
      navigate("/gameOver");
    }
    setReset(!reset);
    setTimeout(() => {
      SetActiveSong(activeSong + 1);
      setBombs(randomizeBombs());
    }, 1000);
  };

  return (
    <Stack justify="space-between" w={"100vw"}>
      <Flex p={"lg"}>
        <Button
          leftSection={<MdChevronLeft />}
          onClick={() => navigate("/b4b")}
          variant="transparent"
          c={"white"}
        >
          Tilbake
        </Button>
      </Flex>
      {songs.length > 0 ? (
        <Flex justify={"center"}>
          <Lyrics
            song={songs[activeSong]}
            reset={reset}
            bombs={bombs}
            activeTeam={activeTeam}
            setActiveTeam={setActiveTeam}
          />
        </Flex>
      ) : (
        <Button>Legg til sanger!</Button>
      )}
      <Flex justify={"flex-end"} p={"lg"}>
        <Button onClick={handleGoNext} variant="transparent" c={"white"}>
          Neste sang
        </Button>
      </Flex>
    </Stack>
  );
}
