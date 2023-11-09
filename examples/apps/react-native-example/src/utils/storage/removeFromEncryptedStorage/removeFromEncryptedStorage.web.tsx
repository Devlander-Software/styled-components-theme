
import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeFromEncryptedStorageForWeb = async (key: string, keyIdentifier: string = '.'): Promise<string | undefined | null | Error | boolean> => {

    try {
        let item = await AsyncStorage.removeItem(`${keyIdentifier}${key}`);
        return true
    } catch (e: any) {
        throw new Error(e.toString() as string);
    }
}
    ;

export default removeFromEncryptedStorageForWeb;