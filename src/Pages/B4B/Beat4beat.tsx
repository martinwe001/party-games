import { Button, Flex, Stack } from "@mantine/core";
import { useNavigate } from "react-router";
import { useSongs } from "../../hooks/useSongs";

export function Beat4beat() {
  const { songs } = useSongs();
  const navigate = useNavigate();

  return (
    <Stack h={"100vh"} w={"100vw"} justify="center" align="center">
      <Flex align={"center"}>
        <Stack gap={"lg"}>
          <Button
            onClick={() => navigate("/b4b/Admin")}
            c={"black"}
            bg={"white"}
          >
            Legg til sanger
          </Button>
          <Button
            onClick={() => navigate("/b4b/Game")}
            c={"black"}
            bg={"white"}
          >
            Start spillet, {songs ? songs.length : 0} sanger lagt til
          </Button>
          <Button
            //leftSection={<MdChevronLeft />}
            onClick={() => navigate("/")}
            c={"black"}
            bg={"white"}
          >
            Tilbake
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
}
