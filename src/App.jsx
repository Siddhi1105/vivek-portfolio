import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";

import "./styles/global.css";

function App() {
  return (
    <Routes>

      {/* Permanent Navbar Layout */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        {/* Project Overview */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        {/* Project Image Gallery */}
        <Route
          path="/projects/:slug/:type"
          element={<ProjectGallery />}
        />

        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;