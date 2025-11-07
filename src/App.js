import React from "react";
import { Routes, Route } from "react-router-dom";
import FileUploadExcel from "./Components/FileUploadExcel";
import GameRow from "./Components/GameCell";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FileUploadExcel />} />
      <Route path="/gamerow" element={<GameRow />} />
    </Routes>
  );
};

export default App;
