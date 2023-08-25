export interface boxShadowFuncInterface {
  (fontSize: string): any
}
export const boxShadowOne: boxShadowFuncInterface = (color) => {
  return `0px -1px 10px ${color}`
}
