import AsyncStorage from "@react-native-async-storage/async-storage";



export const removeFromStorage = async (key: string, keyIdentifier = '@'): Promise<boolean | undefined | string | Error> => {
    try {
      let item = await AsyncStorage.removeItem(`${keyIdentifier}${key}`);
      return true;
    } catch (e: any) {
      throw new Error(e.toString() as string);
    }
  };



export default removeFromStorage;