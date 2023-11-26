import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./pages/Layoute";
import HomePage from "./pages/Home";

import Register from "./components/User/Register";
import Login from "./components/User/Login";
import ContentDetail from "./components/Home/ContentDetail";
import AddContent from "./components/Home/addContent";
import EditContent from "./components/Home/EditContent";

import Home from "./TestLogikadanAlgoritma/Home";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<ResponsiveAppBar />}>
        <Route index element={<HomePage />} />
        <Route path="/detail/:id" element={<ContentDetail />} />
        <Route path="/add" element={<AddContent />} />
        <Route path="/edit/:id" element={<EditContent />} />

        <Route path="/soal" element={<Home />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

