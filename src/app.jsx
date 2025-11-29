import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/Pages/List";
import Detail from "./components/Pages/Detail";
import Create from "./components/Pages/Create";
import Update from "./components/Pages/Update";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}