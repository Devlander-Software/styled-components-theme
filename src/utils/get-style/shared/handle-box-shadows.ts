export interface BoxShadowFuncInterface {
  (fontSize: string): string;
}
export const boxShadowOne: BoxShadowFuncInterface = (color: string) => {
  return `0px -1px 10px ${color}`;
};

export default boxShadowOne;
