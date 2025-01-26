import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const rootDiv = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(<App />);
