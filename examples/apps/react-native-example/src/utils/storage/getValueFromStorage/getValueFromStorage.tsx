import AsyncStorage from "@react-native-async-storage/async-storage";

 const getValueFromStorage = async (
    key: string,
    keyIdentifier: string = '@'
  ): Promise<string | undefined | null | Error> => {
    console.log('this is inside of getValueFromStorage')
      try {
        console.log('this is inside of getValueFromStorage try')
        let result = await AsyncStorage.getItem(`${keyIdentifier}${key}`);
        console.log('this is inside of getValueFromStorage try result', result)
  
        if (result && typeof result !== null) {
          if (typeof result === 'object') {
            let parsedResult = JSON.parse(result);
            return parsedResult
          } else {

            return result
          }
        } else {
     
          return null
        }
      } catch (e: any) {
        throw new Error(e.toString() as string);

      }
    }
  
    export default getValueFromStorage;