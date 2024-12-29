import { Flex, Stack, Text } from "@mantine/core";
import { JeopardyForm } from "../../Components/Jeopardy/JeopardyForm";

export function JeopardyAdmin() {
  return (
    <Flex>
      <Stack bg={"white"}>
        <Text>Jeopardy admin</Text>
        <JeopardyForm />
      </Stack>
    </Flex>
  );
}
