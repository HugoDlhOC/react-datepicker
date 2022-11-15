import CalendarComponent from "./lib/components/Calendar";
import { Provider } from "react-redux";
import { store } from "./lib/app/store";
import React from "react";

export const Calendar = () => {
  return (
    <Provider store={store}>
      <CalendarComponent
        languageChoice={"fr"}
        yearMin={2001}
        yearMax={2120}
        returnFormat={"dd/MM/yyyy"}
        classToggle={"calendar"}
        defaultDate={new Date()}
      />
    </Provider>
  );
};
