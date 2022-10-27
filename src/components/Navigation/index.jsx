import HomeButton from "../HomeButton";
import NextButton from "../NextButton";
import PreviousButton from "../PreviousButton";
import MonthSelect from "../MonthSelect";
import YearSelect from "../YearSelect";
import { useContext } from "react";
import { DateContext } from "../../context/DateContext";

const Navigation = ({ isOpen }) => {
  //context
  const { date } = useContext(DateContext);

  return (
    <nav
      className={
        isOpen === true ? "navigation-datepicker" : "navigation-datepicker hide"
      }
    >
      {date.date.getFullYear() === date.yearMin &&
      date.date.getMonth() === 0 ? (
        ""
      ) : (
        <PreviousButton />
      )}
      <HomeButton />
      <MonthSelect />
      <YearSelect />
      {date.date.getFullYear() === date.yearMax &&
      date.date.getMonth() === 11 ? (
        ""
      ) : (
        <NextButton />
      )}
    </nav>
  );
};

export default Navigation;
