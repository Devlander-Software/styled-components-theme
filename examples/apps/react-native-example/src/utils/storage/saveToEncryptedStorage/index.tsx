import saveToEncryptedStorageForNative from './saveToEncryptedStorage.native';
import { Platform } from 'react-native';

const saveToEncryptedStorage = (key: string,
    value: any) => {
    return Platform.select({
        native: () => saveToEncryptedStorageForNative(key, value),
        default: () => saveToEncryptedStorageForNative(key, value),
    })();

    // return Component ? Component : <>{props.children}</>;
};

export default saveToEncryptedStorage;