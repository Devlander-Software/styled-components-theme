import removeFromEncryptedStorageForNative from './removeFromEncryptedStorage.native';
import removeFromEncryptedStorageForWeb from './removeFromEncryptedStorage.web';

import { Platform } from 'react-native';

const removeFromEncryptedStorage = (key: string,
    keyIdentifier = '.') => {
    return Platform.select({
        native: () => removeFromEncryptedStorageForNative(key, keyIdentifier),
        default: () => removeFromEncryptedStorageForWeb(key, keyIdentifier),
    })();

    // return Component ? Component : <>{props.children}</>;
};

export default removeFromEncryptedStorage;