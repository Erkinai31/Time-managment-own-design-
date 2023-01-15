import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "../Timer/Timer";
import Stopwatch from "../Stopwatch/Stopwatch";
import "./Main.css";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div className="main">
      <div>
        <h1>Effective time management</h1>
      </div>
      <div className="menu">
        <Router>
          <Routes>
            <Route path="/timer" element={<Timer />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
          </Routes>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
