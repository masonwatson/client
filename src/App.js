import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return(
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
