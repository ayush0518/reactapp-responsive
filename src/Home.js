import React from "react";
import spid from "../src/86.jpg";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="This is the about home not to be match as about"
        imgsrc={spid}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
