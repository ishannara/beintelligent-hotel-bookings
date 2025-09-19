import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Rooms from "./pages/Rooms";
import { Gallery } from "./pages/Gallery";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import ToolBar from "./TooBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/toolbar" element={<ToolBar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
