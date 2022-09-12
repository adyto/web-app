import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    );
  }
}

export default App;
