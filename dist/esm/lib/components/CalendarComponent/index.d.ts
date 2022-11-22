/// <reference types="react" />
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
interface CalendarDemo extends CalendarDemoRequiredProps, CalendarDemoOptionalProps {
}
/**
 * This component represents the entire calendar.
 * @param languageChoice
 * @param yearMin
 * @param yearMax
 * @param returnFormat
 * @param classChange
 * @param defaultDate
 * @param labelContent
 * @param nameInput
 * @returns JSX
 */
declare const CalendarComponent: (props: CalendarDemo) => JSX.Element;
export default CalendarComponent;
