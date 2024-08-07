import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { generateManyNodes } from "./components/Table/data";
import VirtualizedTable from "./components/Table";

const App: React.FC = () => {
  const data = { nodes: generateManyNodes(500) };

  return (
    <Container>
      <CssBaseline />
      <VirtualizedTable data={data} />
    </Container>
  );
};

export default App;
