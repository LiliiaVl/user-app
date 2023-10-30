import React from "react";
import ReactDOM from "react-dom/client";
import APPP from "./App";
import "./css/main.css";
// const inputClick = () => console.log("Clicked");
// function mouseOver() {
//   console.log("Mouse over");
// }
// const helptText = "Help text";

// function Ap() {
//   return (
//     <div>
//       <Header />
//       <HeaderClass />

//       <h1>{helptText}</h1>
//       <input
//         placeholder={helptText}
//         onClick={inputClick}
//         onMouseEnter={mouseOver}
//       />
//       <p>{helptText === "Help text" ? "Yes" : "No"}</p>
//     </div>
//   );
// }

const App = ReactDOM.createRoot(document.getElementById("App"));
App.render(<APPP />);
