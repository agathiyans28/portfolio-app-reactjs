import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./container/Main";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
