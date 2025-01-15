import React from "react";
// import Main from "./Component/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent/Main";
import Review from "./ReviewComponent/Main";
import SendMail from "./SendMailComponent/Main";
import NavigationBar from "./MainComponent/NavigationBar"

function App() {

  return (
    <div className="app">
      <Router>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<MainComponent/>}></Route>
          <Route path="/review" element={<Review/>}></Route>
          <Route path="/mail" element={<SendMail/>}></Route>
        </Routes>
      </Router>
     {/* <Main/> */}
    </div>
  );
}

export default App;
