import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import NotFound from "./pages/NotFound/NotFound";
import Cursor from "./components/ui/Cursor";


const App = () => {
  return (
    <div
      className="

        min-h-screen

        bg-slate-50

        text-slate-900

        transition-colors

        duration-500

        dark:bg-[#020617]

        dark:text-white

    "
    >
      <Cursor />
      <Routes>
        {/* Home */}

        <Route path="/" element={<Home />} />

        {/* Project Details */}

        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* 404 */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
