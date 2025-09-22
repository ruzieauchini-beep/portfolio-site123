import { Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import AboutPage from "./pages/AboutPage";
import Projects1 from "./pages/Projects1";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<Projects1/>} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  );

}

export default App;
