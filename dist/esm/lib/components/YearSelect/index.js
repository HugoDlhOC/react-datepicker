import Select from "react-select";
import defineYearsSelect from "../../services/defineYearsSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, defineYearsInterval } from "../../feature/calendarSlice";
import React from "react";
/**
 * An interval has been defined by the developer per props.
 * @returns JSX
 */
var YearSelect = function () {
    //redux
    var dispatch = useDispatch();
    var date = useSelector(function (state) { return state.calendar.date; });
    var dateConvert = new Date(date);
    var yearMin = useSelector(function (state) { return state.calendar.yearMin; });
    var yearMax = useSelector(function (state) { return state.calendar.yearMax; });
    var years = defineYearsSelect(yearMin, yearMax);
    //change of year
    var handleSelectChangeYear = function (option) {
        var saveDate = dateConvert;
        saveDate.setFullYear(option.value);
        dispatch(changeDate({ date: new Date(saveDate).toISOString() }));
        dispatch(defineYearsInterval({
            yearMin: years[0].value,
            yearMax: years[years.length - 1].value
        }));
    };
    return (React.createElement("div", null,
        React.createElement(Select, { defaultValue: years.find(function (item) { return item.value === 2022; }), 
            //@ts-ignore
            onChange: handleSelectChangeYear, value: years.find(function (item) { return item.value === dateConvert.getFullYear(); }), options: years, isSearchable: false, isClearable: false })));
};
export default YearSelect;
//# sourceMappingURL=index.js.map