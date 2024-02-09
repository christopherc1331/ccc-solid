import type { Component } from 'solid-js';

import "./assets/js/modernizr.js";
import "./assets/js/pace.min.js";
import "./assets/js/jquery-3.2.1.min.js";
import "./assets/js/plugins.js";
import "./assets/js/main.js";
import "./assets/css/base.css";
import "./assets/css/vendor.css";
import "./assets/css/main.css";
import {Home} from "./Home";

const App: Component = () => {
  return (
      <Home/>
  );
};

export default App;
