import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import routes from "./routes";
import Landing from './components/Landing'

function App() {
  return <div>
  <Landing />
  {routes}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);
