export enum TextTransformTypes {
  none = 'none',
  uppercase = 'uppercase',
  lowercase = 'lowercase',
}


export type TextTransformType = `${TextTransformTypes}` | TextTransformTypes;