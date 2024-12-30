import { Button, Stack } from "@mantine/core";
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
      <Button
        style={{ position: "absolute", top: "1rem", left: "1rem" }}
        c={"black"}
        variant="transparent"
        leftSection={<MdChevronLeft />}
        onClick={() => navigate("/b4b")}
      >
        Tilbake
      </Button>
      <Stack justify="center" align="center">
        <Stack style={{ overflow: "scroll", height: "60%" }}>
          {songs.map((song) => (
            <SongComponent song={song} />
          ))}
        </Stack>

        <B4bForm />
      </Stack>
    </Stack>
  );
}
