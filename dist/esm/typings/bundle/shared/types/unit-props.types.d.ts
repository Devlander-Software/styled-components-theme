export declare enum UnitOfMeasurementNative {
    PX = "px"
}
export declare enum UnitOfMeasurementWeb {
    PX = "px",
    EM = "em",
    REM = "rem",
    VH = "vh",
    VW = "vw",
    VMIN = "vmin",
    VMAX = "vmax",
    PERCENT = "%"
}
export type UnitOfMeasurement = UnitOfMeasurementNative | UnitOfMeasurementWeb;
export interface UnitPropsHandler {
    (units?: any, unitOfMeasurement?: UnitOfMeasurement): any;
}
