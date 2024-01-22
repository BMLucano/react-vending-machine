import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Chips from "./Chips";
import IceCream from "./IceCream";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/candy" element={<Candy/>}/>
          <Route path="/chips" element={<Chips/>}/>
          <Route path="/ice-cream" element={<IceCream/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
