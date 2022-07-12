import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}