import React from "react";
import Counter from "./components/Counter/Counter";
import "./index.css";



function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;















// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Pages/Home";
// import Profile from "./components/Pages/Profile";
// import NotFound from "./components/Pages/NotFound";
// import Navbar from "./components/Pages/Navbar";
// import Services from "./components/Pages/Services/Services";
// import Contact from "./components/Pages/Contact";
// import Development from "./components/Pages/Services/Development/Development";
// import CyberSecurity from "./components/Pages/Services/CyberSecurity/CyberSecurity";

/* <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />}>
    <Route path="/services/development" element={<Development />} />
    <Route path="/services/cyberSecurity" element={<CyberSecurity />} />
  </Route>
  <Route path="/contact" element={<Contact />} />
  <Route path="/profile/:id" element={<Profile />} />
  <Route path="*" element={<NotFound />} />
</Routes> */
