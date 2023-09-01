import React from "react";
import NavBar from "././NavBar";
import "./App.css";


export default function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <NavBar />
          <div className="body">Body</div>
          <div className="footer">Footer</div>
        </BrowserRouter>
      </div>
    </>
  );
}