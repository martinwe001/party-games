import { ActionIcon, Button, Flex, Stack, Text } from "@mantine/core";
import { MdChevronLeft, MdClose } from "react-icons/md";
import { useNavigate } from "react-router";
import { JeopardyForm } from "../../Components/Jeopardy/JeopardyForm";
import { useJeopardy } from "../../hooks/useJeopardy";

export function LineBacheloretteAdmin() {
  const { jeopardy, setJeopardy } = useJeopardy();
  const navigate = useNavigate();

  const deleteJeopardy = (id: string) => {
    setJeopardy({
      ...jeopardy,
      categories: jeopardy.categories.filter((cat) => cat.id !== id),
    });
  };

  return (
    <Flex align={"center"} h={"90%"}>
      <Button
        style={{ position: "absolute", top: "1rem", left: "1rem" }}
        variant="transparent"
        c={"white"}
        leftSection={<MdChevronLeft />}
        onClick={() => navigate("/line")}
      >
        Tilbake
      </Button>
      <Stack bg={"white"} p={"lg"} h={"100%"} style={{ overflowY: "scroll" }}>
        <Text>Jeopardy admin</Text>
        <JeopardyForm />
      </Stack>
      {jeopardy.categories.map((cat) => (
        <Stack
          bg={"white"}
          justify="space-between"
          align="center"
          p={"lg"}
          bd={"1px solid black"}
          w={"200px"}
          h={"100%"}
        >
          <Stack>
            <Text>{cat.name}</Text>
            <Text>{cat.question1}</Text>
            <Text>{cat.question2}</Text>
            <Text>{cat.question3}</Text>
            <Text>{cat.question4}</Text>
            <Text>{cat.question5}</Text>
          </Stack>
          <ActionIcon variant="outline" onClick={() => deleteJeopardy(cat.id)}>
            <MdClose />
          </ActionIcon>
        </Stack>
      ))}
    </Flex>
  );
}
