import { Button, Flex, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useJeopardy } from "../../hooks/useJeopardy";

export function Jeopardy() {
  const { jeopardy } = useJeopardy();
  const navigate = useNavigate();

  return (
    <Stack h={"100vh"} w={"100vw"} justify="center" align="center">
      <Flex align={"center"}>
        <Stack gap={"lg"}>
          <Button
            onClick={() => navigate("/jeopardy/Admin")}
            c={"black"}
            bg={"white"}
          >
            Legg til spørsmål
          </Button>
          <Button
            onClick={() => navigate("/jeopardy/Game")}
            c={"black"}
            bg={"white"}
          >
            Start spillet, {jeopardy ? jeopardy.categories.length : 0}
            kategorier lagt til
          </Button>
          <Button onClick={() => navigate("/")} c={"black"} bg={"white"}>
            Tilbake
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
}
