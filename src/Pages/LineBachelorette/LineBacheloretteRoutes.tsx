import { createTheme, Flex, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { LineBachelorette } from "./LineBachelorette";
import { LineBacheloretteAdmin } from "./LineBacheloretteAdmin";
import { LineBacheloretteGame } from "./LineBacheloretteGame";

export function LineBacheloretteRoutes() {
  const b4bTheme = createTheme({});

  return (
    <MantineProvider theme={b4bTheme}>
      <Flex
        h={"100vh"}
        w={"100vw"}
        align={"center"}
        justify={"center"}
        style={{
          backgroundImage: `url(/line.jpeg)`,
          backgroundSize: "200px",
        }}
      >
        <Routes>
          <Route path="/" element={<LineBachelorette />} />
          <Route path="/Game" element={<LineBacheloretteGame />} />
          <Route path="/Admin" element={<LineBacheloretteAdmin />} />
        </Routes>
      </Flex>
    </MantineProvider>
  );
}
