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
type UnitOfMeasurement = UnitOfMeasurementNative | UnitOfMeasurementWeb;
export interface handleUnitPropsInterface {
    (units?: any, unitOfMeasurement?: UnitOfMeasurement): any;
}
export declare const handleUnitProps: handleUnitPropsInterface;
export default handleUnitProps;
