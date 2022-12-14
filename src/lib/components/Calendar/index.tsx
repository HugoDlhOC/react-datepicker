import React from "react";
import { CalendarContextProvider } from "../../context/CalendarContext";
import CalendarComponent from "../CalendarComponent";

interface CalendarDemoRequiredProps {
  languageChoice: string;
  yearMin: number;
  yearMax: number;
  returnFormat: string;
  defaultDate: Date;
  labelContent: string;
}

interface CalendarDemoOptionalProps {
  classChange?: string;
  nameInput?: string;
  handleDateChanged?: (e: any) => void;
}

interface CalendarDemo
  extends CalendarDemoRequiredProps,
    CalendarDemoOptionalProps {}

const Calendar = (props: CalendarDemo) => {
  return (
    <CalendarContextProvider>
      <CalendarComponent
        languageChoice={props.languageChoice}
        yearMin={props.yearMin}
        yearMax={props.yearMax}
        returnFormat={props.returnFormat}
        defaultDate={props.defaultDate}
        labelContent={props.labelContent}
        classChange={props.classChange}
        nameInput={props.nameInput}
        handleDateChanged={props.handleDateChanged}
      />
    </CalendarContextProvider>
  );
};

export default Calendar;
