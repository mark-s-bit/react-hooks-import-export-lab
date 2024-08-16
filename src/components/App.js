import React from "react";
import Header from "./Header"; // Ensure these imports are correct
import About from "./About";   // Ensure these imports are correct

function App() {
  return (
    <div>
      <Header />
      <div id="home">
        {/* Content for home */}
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default App;
