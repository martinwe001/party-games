import { createTheme, Flex, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { Jeopardy } from "./Jeopardy";
import { JeopardyAdmin } from "./JeopardyAdmin";
import { JeoparyGame } from "./JeopardyGame";

export function JeopardyRoutes() {
  const b4bTheme = createTheme({});

  return (
    <MantineProvider theme={b4bTheme}>
      <Flex
        h={"100vh"}
        w={"100vw"}
        style={{
          backgroundImage: `url(https://www.buzzerblog.com/wp-content/uploads/2014/09/Jeopardy_S31_A_HD_14_15-1180x528.png)`,
          backgroundSize: "contain",
        }}
        align={"center"}
        justify={"center"}
      >
        <Routes>
          <Route path="/" element={<Jeopardy />} />
          <Route path="/Game" element={<JeoparyGame />} />
          <Route path="/Admin" element={<JeopardyAdmin />} />
        </Routes>
      </Flex>
    </MantineProvider>
  );
}
