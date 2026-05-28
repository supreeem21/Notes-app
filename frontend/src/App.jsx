import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    <button className="btn btn-primary">Btn</button>
      <Outlet />
    </>
  );
};

export default App;
