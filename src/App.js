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

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/exam" />} />
          <Route exact path="/login" element={<Login authorized={false} />} />
          <Route exact path="/exam" element={<Exam authorized={false} />} />
          <Route exact path="/result" element={<Result />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
