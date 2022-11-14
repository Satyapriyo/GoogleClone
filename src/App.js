import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./components/Results"
import Routs from "./components/Routs";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <><div className={darkTheme ? 'dark' : ''}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routs/>
      <Results />
      <Footer />
      </div>
    </>
  );
};

export default App;
