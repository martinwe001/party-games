import { Button, Flex, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { v4 as uuidv4 } from "uuid";
import { useJeopardy } from "../../hooks/useJeopardy";
import { Category } from "../../types";

export function JeopardyForm() {
  const { jeopardy, setJeopardy } = useJeopardy();

  const jeopardyform = useForm<Category>({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      name: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    },
  });

  const onSubmit = () => {
    const category = jeopardyform.getValues();
    category.id = uuidv4();

    setJeopardy(
      jeopardy && {
        ...jeopardy,
        categories: jeopardy.categories
          ? [...jeopardy.categories, category]
          : [category],
      }
    );
    jeopardyform.reset();
  };

  return (
    <Stack mt={"lg"}>
      <Stack gap={"xs"}>
        <TextInput
          withAsterisk
          label="Navn på kategori"
          placeholder="Navn"
          key={jeopardyform.key("name")}
          {...jeopardyform.getInputProps("name")}
        />
        <Textarea
          withAsterisk
          label="Spørsmål 1"
          autosize
          placeholder="Spørsmål"
          key={jeopardyform.key("question1")}
          {...jeopardyform.getInputProps("question1")}
        />
        <Textarea
          withAsterisk
          label="Spørsmål 2"
          autosize
          placeholder="Spørsmål"
          key={jeopardyform.key("question2")}
          {...jeopardyform.getInputProps("question2")}
        />
        <Textarea
          withAsterisk
          label="Spørsmål 3"
          autosize
          placeholder="Spørsmål"
          key={jeopardyform.key("question3")}
          {...jeopardyform.getInputProps("question3")}
        />
        <Textarea
          withAsterisk
          label="Spørsmål 4"
          autosize
          placeholder="Spørsmål"
          key={jeopardyform.key("question4")}
          {...jeopardyform.getInputProps("question4")}
        />
        <Textarea
          withAsterisk
          label="Spørsmål 5"
          autosize
          placeholder="Spørsmål"
          key={jeopardyform.key("question5")}
          {...jeopardyform.getInputProps("question5")}
        />
      </Stack>
      <Flex justify={"center"}>
        <Button type="submit" onClick={onSubmit} variant="transparent">
          Legg til kategori og spørsmål
        </Button>
      </Flex>
    </Stack>
  );
}
