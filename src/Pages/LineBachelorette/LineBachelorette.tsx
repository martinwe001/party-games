import { Button, Flex, Stack, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useJeopardy } from "../../hooks/useJeopardy";
import "./line.css";

export function LineBachelorette() {
  const { jeopardy } = useJeopardy();
  const navigate = useNavigate();

  return (
    <Stack h={"100vh"} w={"100vw"} justify="center" align="center">
      <Flex align={"center"}>
        <Stack gap={"lg"} align="center">
          <Title c={"pink"} className="modak-regular1 " size={"100px"}>
            Lines utdrikningslag
          </Title>
          <Stack w={"200px"} align="center">
            <Button
              onClick={() => navigate("/line/Admin")}
              c={"pink"}
              bg={"white"}
              className="modak-regular1 "
              w={"300px"}
            >
              Legg til spørsmål
            </Button>
            <Button
              onClick={() => navigate("/line/Game")}
              c={"pink"}
              bg={"white"}
              className="modak-regular1 "
              w={"300px"}
            >
              Start spillet
            </Button>
            <Button
              onClick={() => navigate("/")}
              c={"pink"}
              bg={"white"}
              className="modak-regular1 "
              w={"300px"}
            >
              Tilbake
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
