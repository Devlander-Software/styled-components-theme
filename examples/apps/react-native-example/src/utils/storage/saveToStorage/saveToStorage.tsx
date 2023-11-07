import AsyncStorage from '@react-native-async-storage/async-storage';
console.log('this is inside of saveToStorage', AsyncStorage)

 const saveToStorage = async (
  key: string,
  value: any,
  keyIdentifier = '@'
): Promise<string | undefined> => {
    try {
      if (typeof value === 'object') value = JSON.stringify(value);
      if (typeof value === 'boolean') value = JSON.stringify(value);
      if (typeof value === 'number') value = JSON.stringify(value);
      if (typeof value === 'undefined') return;

      await AsyncStorage.setItem(`${keyIdentifier}${key}`, value, (err) => {
        if (err) {
          console.log('Error saving to storage', err);
          return undefined
        } else {
          return "Saved to storage";
        }
     

      });
    } catch (e: any) {
      console.log('Error saving to storage', e)
      throw new Error(e.toString() as string);
    }
  };

export default saveToStorage;