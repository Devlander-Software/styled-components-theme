import * as SecureStore from 'expo-secure-store';

export const removeFromEncryptedStorageForNative = async (key: string, keyIdentifier = '.'): Promise<string | undefined | null | Error> =>{
        try {
            let deletedValue = await SecureStore.deleteItemAsync(`${keyIdentifier}${key}`);
            return 'Deleted from storage';
        } catch (e: any) {
            return new Error(e.toString() as string);
        }}
    ;

export default removeFromEncryptedStorageForNative;