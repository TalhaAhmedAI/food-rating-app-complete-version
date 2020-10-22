import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navBar";
import Routing from "./routing";

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    try {
      if (localStorage.length) {
        const jwt = localStorage.getItem("token");
        const {user} = jwtDecode(jwt);
        setState(user);
      }
    } catch (error) {}
  }, []);
  return (
    <div>
      <NavBar user={state} />
      <Routing user={state}/>
    </div>
  );
}

export default App;
