import ApiServiceManager from '@devlander/rawstack-axios-module';
import { baseURL } from "../../assets/env";
import getValueFromStorage from "../utils/storage/getValueFromStorage";
import removeFromStorage from "../utils/storage/removeFromStorage";
import saveToStorage from "../utils/storage/saveToStorage";

console.log('this is inside of api.tsx baseURL', baseURL)
console.log('this is inside of api.tsx saveToStorage', saveToStorage)
console.log('this is inside of api.tsx getValueFromStorage', getValueFromStorage)


const remove = async (key: string) => await removeFromStorage(key, '@')

const apiInitialized =   new ApiServiceManager(
    baseURL,
    saveToStorage,
    getValueFromStorage,
    remove
)

console.log('this is inside of apiInitialized', apiInitialized)

export default apiInitialized;