import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup1 from "./pages/Signup1/Signup1";
import Modal3 from "./pages/Modal3/Modal3";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup1 />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
