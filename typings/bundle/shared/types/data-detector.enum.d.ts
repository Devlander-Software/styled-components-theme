export declare enum DataDetectorEnum {
    none = "none",
    all = "all",
    phoneNumber = "phoneNumber",
    link = "link",
    calendarEvent = "calendarEvent"
}
export type DataDetectorType = `${DataDetectorEnum}` | DataDetectorEnum;
