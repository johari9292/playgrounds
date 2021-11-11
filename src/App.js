import React from "react";

import { Footer, Home, Topbar } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <div className="topbar">
        <Topbar />
      </div>
      <div className="main">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div >
  );
}

export default App;
