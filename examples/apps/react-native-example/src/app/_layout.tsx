import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack, useGlobalSearchParams, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Provider from '../context/context-provider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  
  // Ensure that reloading on `/modal` keeps a back button present.
};

// Prevent the splash screen from auto-hiding before asset loading is complete.

function Root() {

  const pathname = usePathname();
  const params = useGlobalSearchParams();

    // Track the location in your analytics provider here.
    useEffect(() => {
      // analytics.track({ pathname, params });
      // console.log(pathname, params, 'this is pathname and params')
    }, [pathname, params]);
  



  return (
    <Provider>
      <Slot 
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          
          cardStyle: { backgroundColor: 'transparent' },
        }}
        
      />
    </Provider>
  );
}

export default  Root;
