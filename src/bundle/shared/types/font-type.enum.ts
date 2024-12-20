export enum FontTypeEnum {
  Font1 = 'Font1',
  Font2 = 'Font2',
  Font3 = 'Font3',
  CondensedFont = 'CondensedFont',
}



export type FontName = 'Font1' | 'Font2' | 'Font3' | 'CondensedFont';

// use this from now on
export type FontProperty = FontName | FontTypeEnum | `${FontTypeEnum}` 

