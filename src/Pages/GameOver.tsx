import { Flex, Text } from "@mantine/core";

export function GameOver() {
  return (
    <Flex justify={"center"} align={"center"} w={"100vw"}>
      <Text size="100px">Spillet er ferdig</Text>
    </Flex>
  );
}
