import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";

//Components
import Exam from "./pages/Exam";
import Login from "./pages/Login";
import Result from "./pages/Result";

//Css
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/login" />} />
          <Route exact path="/login" element={<Login authorized={false} />} />
          <Route exact path="/exam" element={<Exam authorized={false} />} />
          <Route exact path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default App;
