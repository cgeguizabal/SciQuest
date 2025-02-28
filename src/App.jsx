import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import Users from "./components/Users";
import "./Style/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Post/:id" element={<Post />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  );
}

export default App;
