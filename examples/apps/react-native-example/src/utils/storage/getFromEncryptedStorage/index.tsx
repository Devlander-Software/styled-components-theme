import getFromEncryptedStorageWeb from './getFromEncryptedStorage.native';
import getFromEncryptedStorageNative from './getFromEncryptedStorage.web';

import { Platform } from 'react-native';

const getFromEncryptedStorage = (key: string,
    keyIdentifier?: string) => {
    return Platform.select({
        native: () => getFromEncryptedStorageNative(key, keyIdentifier ? keyIdentifier : '.'),
        default: () => getFromEncryptedStorageWeb(key, keyIdentifier ? keyIdentifier : '.'),
    })();

    // return Component ? Component : <>{props.children}</>;
};

export default getFromEncryptedStorage;