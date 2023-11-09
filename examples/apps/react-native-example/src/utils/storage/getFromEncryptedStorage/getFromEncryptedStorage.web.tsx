import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFromEncryptedStorageForWeb = async (
    key: string,
    keyIdentifier: string = "."
    ): Promise<string | undefined | null | Error | JSON | boolean> => {
        try {
        let result = await AsyncStorage.getItem(`${keyIdentifier}${key}`);

        if (result && typeof result !== null) {
            if (typeof result === "object") {
                let parsedResult = JSON.parse(result);
                return parsedResult;
            } else {
                return result;
            }
        } else {
            return null;
        }
    } catch (e: any) {
        return new Error(e.toString() as string);    }
};

export default getFromEncryptedStorageForWeb;
