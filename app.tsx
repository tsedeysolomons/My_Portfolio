import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ContactPage from "./app/routes/Contact";
import Home from "./app/routes/home";
import About from "./app/routes/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
