import React from "react";
import Greeting from "../../components/greeting/Greeting";
import Navbar from "../../components/navbar/Navbar";
import Skill from "../../components/skills/Skills";

function Home() {
  return (
    <>
      <Navbar />
      <Greeting />
      <Skill />
    </>
  );
}

export default Home;
