// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "~/components/layout/Applayout";
import About from "~/routes/About";
import Contact from "~/routes/Contact";
import Home from "~/routes/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
