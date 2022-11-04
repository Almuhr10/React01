import { Routes, Route } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
import Contact from "./Contact";
import GetMethodAPI from "./GetMethodAPI";
import Details from "./Details";

function Routers() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data" element={<GetMethodAPI />} />
        <Route path="/details/:cId" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Routers;
