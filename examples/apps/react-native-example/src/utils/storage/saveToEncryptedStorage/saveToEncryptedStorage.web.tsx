
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToEncryptedStorageForWeb = async (
    key: string,
    value: any,
    keyIdentifier = '.'
): Promise<any> => {
    try {
        if (typeof value === 'object') value = JSON.stringify(value);
        if (typeof value === 'boolean') value = JSON.stringify(value);
        if (typeof value === 'number') value = JSON.stringify(value);
        if (typeof value === 'undefined') return;

        await AsyncStorage.setItem(`${keyIdentifier}${key}`, value, (err) => {
            if (err) {
                throw err
            }
            return value
        });
    } catch (e) {
        return e
    }
}

export default saveToEncryptedStorageForWeb;