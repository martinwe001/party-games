import { Flex, MantineProvider, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Beat4beatRoutes } from "./Pages/B4B/Beat4beatRoutes";
import { GameOver } from "./Pages/GameOver";
import { GameSelectorPage } from "./Pages/GameSelectorPage";
import { HorseRace } from "./Pages/HorseRace/HorseRace";
import { JeopardyRoutes } from "./Pages/Jeopardy/JeopardyRoutes";

export default function App() {
  const location = useLocation();
  console.log(location);

  return (
    <MantineProvider>
      <Routes>
        <Route path="*" element={<GameSelectorPage />} />
        <Route path="/b4b/*" element={<Beat4beatRoutes />} />
        <Route path="/jeopardy/*" element={<JeopardyRoutes />} />
        <Route path="/horserace/*" element={<HorseRace />} />
        <Route path="/gameOver" element={<GameOver />} />
      </Routes>
      <Flex
        w={"100%"}
        justify={"center"}
        style={{ position: "absolute", bottom: "1px" }}
        c={"white"}
      >
        <Text
          size="12px"
          c={location.pathname.includes("/horserace") ? "black" : "white"}
          className="brand"
        >
          ® Made by Boysconsulting™ - Martin Wangen-Eriksen
        </Text>
      </Flex>
    </MantineProvider>
  );
}
