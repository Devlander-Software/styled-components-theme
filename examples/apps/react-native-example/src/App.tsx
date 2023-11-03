import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider} from '@devlander/shared-react-native-types';
 function App() {
  return (
    <View style={styles.container}>

    <ThemeProvider >
      <>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      </>

    </ThemeProvider>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
