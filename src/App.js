import { Routes, Route, Navigate } from "react-router-dom";

//Components
import Exam from "./pages/Exam";
import Login from "./pages/Login";
import Result from "./pages/Result";

//Css
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/exam" element={<Exam />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
