import { FontAwesomeIconNames, IconNames, IoniconNames, MaterialIconNames } from "../types/icon-names.enum";

const AllMaterialIconNames = Object.keys(MaterialIconNames);
const AllIoniconNames = Object.values(IoniconNames);
const AllFontAwesomeIconNames = Object.values(FontAwesomeIconNames);
 const AllIconNames = [...AllMaterialIconNames, ...AllIoniconNames, ...AllFontAwesomeIconNames];

 export default AllIconNames;