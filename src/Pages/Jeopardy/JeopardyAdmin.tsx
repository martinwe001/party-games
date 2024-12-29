import { Flex, Stack, Text } from "@mantine/core";
import { JeopardyForm } from "../../Components/Jeopardy/JeopardyForm";
import { useJeopardy } from "../../hooks/useJeopardy";

export function JeopardyAdmin() {
  const { jeopardy } = useJeopardy();
  return (
    <Flex>
      <Stack bg={"white"}>
        <Text>Jeopardy admin</Text>
        <JeopardyForm />
      </Stack>
    </Flex>
  );
}
