import React from "react";
import Header from "../../Components/Header";
import About from "./About";
import Contact from "./Contact";
// import Courses from "./Courses";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import LeftSider from "./LeftSider";
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary md:px-40 px-5">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        {/* <Courses /> */}
        <Contact />
        <Footer />
        <LeftSider />
      </div>

    </div>
  );
}

export default Home;
