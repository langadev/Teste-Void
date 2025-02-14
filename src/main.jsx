import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteComponent from "./routes/RouteComponent";
import { Provider } from "react-redux";
import { store } from "./redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Provider store={store}>
     <RouteComponent/>
   </Provider>
 
  </React.StrictMode>
);
