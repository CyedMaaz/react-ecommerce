import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../components/Navigation/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Users from "../Mutation/Mutatiion";
import Header from "../containers/HeaderContainer";

export default function NavigationContainer() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />}/>
         <Route path="/Users" element={<Users/>}/>
      </Routes>
    </Router>
  );
}
