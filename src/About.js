import React from "react";
import car from "../src/2.jpg";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name="This is the about section not to be match as home"
        imgsrc={car}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
