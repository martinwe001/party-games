import { Flex, MantineProvider, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Beat4beatRoutes } from "./Pages/B4B/Beat4beatRoutes";
import { GameOver } from "./Pages/GameOver";
import { GameSelectorPage } from "./Pages/GameSelectorPage";
import { JeopardyRoutes } from "./Pages/Jeopardy/JeopardyRoutes";

export default function App() {
  return (
    <Router>
      <MantineProvider>
        <Routes>
          <Route path="*" element={<GameSelectorPage />} />
          <Route path="/b4b/*" element={<Beat4beatRoutes />} />
          <Route path="/jeopardy/*" element={<JeopardyRoutes />} />
          <Route path="/gameOver" element={<GameOver />} />
        </Routes>
        <Flex
          w={"100%"}
          justify={"center"}
          style={{ position: "absolute", bottom: "1px" }}
          c={"white"}
        >
          <Text size="12px">
            ® Made by Boysconsulting™ - Martin Wangen-Eriksen
          </Text>
        </Flex>
      </MantineProvider>
    </Router>
  );
}
