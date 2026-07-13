import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ViewerProvider } from "./context/ViewerContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <ViewerProvider>
    <App />
  </ViewerProvider>
);