import { Button, Flex, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router";

export function GameSelectorPage() {
  const navigate = useNavigate();
  return (
    <Stack
      gap={"lg"}
      h={"100vh"}
      w={"100vw"}
      justify="center"
      align="center"
      style={{
        backgroundImage: `url(https://i.gifer.com/4A5.gif)`,
        backgroundSize: "cover",
      }}
    >
      <Text size="100px" c={"white"}>
        Party games
      </Text>
      <Flex gap={"lg"} justify={"center"}>
        <Button onClick={() => navigate("/b4b")} bg={"white"} c={"black"}>
          Beat for Beat
        </Button>
        <Button onClick={() => navigate("/jeopardy")} bg={"white"} c={"black"}>
          Jeopardy!
        </Button>
      </Flex>
    </Stack>
  );
}
