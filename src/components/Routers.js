import { Routes, Route } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
import Contact from "./Contact";

function Routers() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Routers;