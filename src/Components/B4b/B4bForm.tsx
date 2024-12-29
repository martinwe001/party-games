import { Button, Flex, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { v4 as uuidv4 } from "uuid";
import { useSongs } from "../../hooks/useSongs";
import { Song } from "../../types";

export function B4bForm() {
  const { songs, setSongs } = useSongs();

  const b4bform = useForm<Song>({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      lyric1: "",
      lyric2: "",
      lyric3: "",
      lyric4: "",
      lyric5: "",
      lyric6: "",
    },
  });

  const onSubmit = () => {
    const song = b4bform.getValues();
    song.id = uuidv4();

    setSongs([...songs, song]);
    b4bform.reset();
  };

  return (
    <Stack mt={"lg"}>
      <Flex gap={"md"}>
        <TextInput
          withAsterisk
          label="Tekst del 1"
          placeholder="Tekst"
          key={b4bform.key("lyric1")}
          {...b4bform.getInputProps("lyric1")}
        />
        <TextInput
          withAsterisk
          label="Tekst del 2"
          placeholder="Tekst"
          key={b4bform.key("lyric2")}
          {...b4bform.getInputProps("lyric2")}
        />
        <TextInput
          withAsterisk
          label="Tekst del 3"
          placeholder="Tekst"
          key={b4bform.key("lyric3")}
          {...b4bform.getInputProps("lyric3")}
        />
        <TextInput
          withAsterisk
          label="Tekst del 4"
          placeholder="Tekst"
          key={b4bform.key("lyric4")}
          {...b4bform.getInputProps("lyric4")}
        />
        <TextInput
          withAsterisk
          label="Tekst del 5"
          placeholder="Tekst"
          key={b4bform.key("lyric5")}
          {...b4bform.getInputProps("lyric5")}
        />
        <TextInput
          withAsterisk
          label="Tekst del 6"
          placeholder="Tekst"
          key={b4bform.key("lyric6")}
          {...b4bform.getInputProps("lyric6")}
        />
      </Flex>
      <Flex justify={"center"}>
        <Button type="submit" onClick={onSubmit} variant="transparent">
          Legg til sang
        </Button>
      </Flex>
    </Stack>
  );
}
