import "./App.css";
import "./Bg's.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home"><Header /></Element>
      <Element name="about2"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="project"><Project /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </>
  );
}
export default App;
