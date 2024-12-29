import { createTheme, Flex, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { B4bGame } from "../../Components/B4b/B4bGame";
import { Beat4beat } from "./Beat4beat";
import { Beat4beatAdmin } from "./Beat4beatAdmin";

export function Beat4beatRoutes() {
  const b4bTheme = createTheme({});

  return (
    <MantineProvider theme={b4bTheme}>
      <Flex
        h={"100vh"}
        w={"100vw"}
        style={{
          backgroundImage: `url("https://m.media-amazon.com/images/M/MV5BNGU2Y2M0OTgtNjg0Yi00YjhhLTkxYjUtMWYyMjQxMTYxYmUzXkEyXkFqcGc@._V1_.jpg)`,
        }}
      >
        <Routes>
          <Route path="/" element={<Beat4beat />} />
          <Route path="/Game" element={<B4bGame />} />
          <Route path="/Admin" element={<Beat4beatAdmin />} />
        </Routes>
      </Flex>
    </MantineProvider>
  );
}
