import { Button, Flex, Stack } from "@mantine/core";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router";
import { B4bForm } from "../../Components/B4b/B4bForm";
import { SongComponent } from "../../Components/B4b/Song";
import { useSongs } from "../../hooks/useSongs";

export function Beat4beatAdmin() {
  const { songs } = useSongs();
  const navigate = useNavigate();
  return (
    <Stack w={"100vw"} justify={"center"} bg={"white"}>
      <Flex justify={"flex-start"} p={"lg"}>
        <Button
          onClick={() => navigate("/b4b")}
          variant="subtle"
          leftSection={<MdChevronLeft />}
        >
          Tilbake
        </Button>
      </Flex>
      <Stack justify="center" align="center">
        {songs.map((song) => (
          <SongComponent song={song} />
        ))}

        <B4bForm />
      </Stack>
    </Stack>
  );
}
