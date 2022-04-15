import { ToastComponent } from "@components/ToastComponent";
import Router from "@routes/index";
import "assets/sass/style.scss";
import React from "react";

const App = () => {
  return (
    <div>
      <ToastComponent />
      <Router />
    </div>
  );
};

export default App;
