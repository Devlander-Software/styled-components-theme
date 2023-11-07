import { isJson } from '@devlander/shared-react-native-types';
import * as SecureStore from 'expo-secure-store';

export const getFromEncryptedStorageForNative = async (
    key: string,
    keyIdentifier = '.'
): Promise<string | undefined | null | Error | JSON | boolean> => {
    let result = await SecureStore.getItemAsync(`${keyIdentifier}${key}`);

    try {
        if (result) {
            if (isJson(result)) {
                return isJson(result);
            } else {
                return result;
            }
        } else {
            return null;
        }
    } catch (e: any) {
        return new Error(e.toString() as string);
    }
};
export default getFromEncryptedStorageForNative;