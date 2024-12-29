import { Flex } from "@mantine/core";
import { JeoparyCategory } from "../../Components/Jeopardy/JeopardyCategory";
import { useJeopardy } from "../../hooks/useJeopardy";

export function JeoparyGame() {
  const { jeopardy } = useJeopardy();
  return (
    <Flex gap={0} align={"center"} justify={"center"} w={"100%"}>
      {jeopardy.categories.map((cat) => (
        <JeoparyCategory category={cat} />
      ))}
    </Flex>
  );
}
