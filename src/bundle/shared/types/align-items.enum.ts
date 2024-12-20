export enum AlignItemsEnum {
  center = 'center',
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  stretch = 'stretch',
  baseline = 'baseline',
}


export type AlignItemType = `${AlignItemsEnum}` | AlignItemsEnum;