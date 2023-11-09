import * as SecureStore from 'expo-secure-store';

const saveToEncryptedStorageForNative = async (
    key: string,
    value: any,
    keyIdentifier = '.'
): Promise<string | boolean | undefined | null | Error> => {

    try {
        if (typeof value === 'object') value = JSON.stringify(value);
        if (typeof value === 'boolean') value = JSON.stringify(value);
        if (typeof value === 'undefined') return;

        let savedValue = await SecureStore.setItemAsync(`${keyIdentifier}${key}`, value);

        return true

    } catch (e: any) {
        return new Error(e.toString() as string);
    }
}

export default saveToEncryptedStorageForNative;