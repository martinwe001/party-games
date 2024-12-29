import { Button, Flex } from "@mantine/core";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router";
import { JeoparyCategory } from "../../Components/Jeopardy/JeopardyCategory";
import { useJeopardy } from "../../hooks/useJeopardy";

export function JeoparyGame() {
  const { jeopardy } = useJeopardy();
  const navigate = useNavigate();
  return (
    <Flex w={"100%"} justify={"center"}>
      <Button
        style={{ position: "absolute", top: "1rem", left: "1rem" }}
        variant="transparent"
        c={"white"}
        leftSection={<MdChevronLeft />}
        onClick={() => navigate("/jeopardy")}
      >
        Tilbake
      </Button>
      <Flex gap={"xs"} align={"center"} justify={"center"} bg={"black"}>
        {jeopardy.categories.map((cat) => (
          <JeoparyCategory category={cat} />
        ))}
      </Flex>
    </Flex>
  );
}
