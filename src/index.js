import React from "react";
import ReactDOM from "react-dom/client";
import "./lib/css/style.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./lib/app/store";
import { Provider } from "react-redux";
import Calendar from "./lib/components/Calendar/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Calendar
        yearMin={2020}
        yearMax={2030}
        returnFormat={"dd/MM/yyyy"}
        languageChoice={"af"}
      />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
