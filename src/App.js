import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import NotFound from "./components/Pages/NotFound";
import Navbar from "./components/Pages/Navbar";
import Services from "./components/Pages/Services/Services";
import Contact from "./components/Pages/Contact";
import Development from "./components/Pages/Services/Development/Development";
import CyberSecurity from "./components/Pages/Services/CyberSecurity/CyberSecurity";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/cyberSecurity" element={<CyberSecurity />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        {/* dynamic path with :id  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
