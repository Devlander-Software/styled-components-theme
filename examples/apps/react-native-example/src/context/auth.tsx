import React, { useState, useEffect, useContext, ReactNode, useCallback } from 'react';
import { SplashScreen, router, useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { User } from '../types/user.type';
import ThemeProvider from '../../packages/design-system/src/providers/ThemeProvider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Platform } from 'react-native';
import { userTokenDecodedType } from '../../packages/axios-module/src/types/user-token-types';
import { getToken } from '../api';
import jwtDecode from 'jwt-decode';
import removeFromEncryptedStorage from '../utils/storage/removeFromEncryptedStorage';
import removeFromStorage from '../utils/storage/removeFromStorage';
import { useErrorsContext } from './error-provider';
import { AllRoutes, RoutesEnum } from '../types/routes.type';

interface AuthContextInterface {
    signIn: (user: userTokenDecodedType) => void;
    signOut: () => void;
    user: userTokenDecodedType | null;
    isGuest?: boolean;
    toggleGuest: (isGuest: boolean) => void;
    checkIfUserExistsInApplication: () => Promise<userTokenDecodedType | null | undefined>;
}

const AuthContext = React.createContext<AuthContextInterface>({
    signIn: () => {},
    signOut: () => {},
    isGuest: false,
    toggleGuest: () => {},
    user: null,
    checkIfUserExistsInApplication: () => Promise.resolve(null),
});

// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: userTokenDecodedType | null, isGuest: boolean) {
  const segments = useSegments();
  const router = useRouter();




  const navigationState = useRootNavigationState();
  React.useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    console.log("user", user);

    if (
      // If usernot signed in and ther initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup && !isGuest
    ) {
      console.log('this is inside of user and not auth group')
      router.replace(AllRoutes.signIn);
 
    } else if (user && inAuthGroup) {
      console.log('this is inside of user and auth group')
      // Redirect away from the login page.
      router.replace(AllRoutes.browse);
    }
  }, [user, segments, navigationState]);
}
interface ProviderProps {
  children: ReactNode;
}

 function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<userTokenDecodedType | null>(null);



const [loggingIn, setLoggingIn] = useState<boolean>(false);
const [loggingOut, setLoggingOut] = useState<boolean>(false);

const [loadingToken, setLoadingToken] = useState<boolean>(true);
const [hasCheckedForToken, setHasCheckedForToken] = useState<boolean>(false);
const [appReady, setAppReady] = useState(false);
const [skippedSignUp, setSkippedSignUp] = useState(false);
  const [isGuest, setIsGuest] = useState<boolean>(false);
  const {errors, setErrors} = useErrorsContext()


  const checkIfUserExistsInApplication =
  async (): Promise<userTokenDecodedType | null | undefined> => {
      try {
          let existingToken: any = await getToken();

          if (loggingOut) {
              setLoggingOut(false);
          }

          if (existingToken) {
              const decoded: userTokenDecodedType = jwtDecode(existingToken);
              console.log(decoded, 'this is decoded')
              if (decoded) {
                  console.log(decoded, 'this is decoded')
                  setHasCheckedForToken(true);
                  setUser(decoded);

                  return decoded;
              }
          } else {
              setHasCheckedForToken(true);
              return null;
          }


      } catch (err) {
          setHasCheckedForToken(true);
          return null;
      }
  };

const handleSetToken: () => Promise<userTokenDecodedType | null> =
  useCallback(async () => {
      let tempToken: any = await getToken()
      console.log(tempToken, 'this is temp token')
      try {
          setLoadingToken(true);

          if (tempToken && typeof tempToken == 'string') {
              const decoded: userTokenDecodedType = jwtDecode(tempToken);
              if (decoded) {
                  setUser(decoded);
                  setAppReady(true);
                  return decoded;
              } else {
                  setUser(null);
                  setAppReady(true);
                  return null;
              }
          }
          setLoadingToken(false);
          setHasCheckedForToken(true);
          return null;
      } catch (err) {
          setLoadingToken(false);
          return null;
      }
  }, []);

  const toggleGuest = (isGuest: boolean) => {
    setIsGuest(isGuest);
    // do more logic here switching the layout
  };

  const logout = async (): Promise<boolean> => {
    try {
        setLoggingOut(true);
        await removeFromEncryptedStorage('TheRawOutdoors');
        await removeFromStorage('TheRawOutdoors');


        setUser(null);
        setSkippedSignUp(false)

        return true;
    } catch (e: any) {
        setLoggingOut(false);
        setErrors({ message: e.toString() }, 'AuthProvider: logout');
        throw e;
    }
};

useEffect(() => {
  let isSubscribed = true;
  if (isSubscribed && !hasCheckedForToken) {
      handleSetToken();
  }
  return () => {
      isSubscribed = false;
  };
}, [handleSetToken, hasCheckedForToken, handleSetToken]);



  useProtectedRoute(user, isGuest);

  return (
    <ThemeProvider>

    <AuthContext.Provider
      value={{
        signIn: (user: userTokenDecodedType) => setUser(user),
        signOut: () => setUser(null),
        user,
        toggleGuest,
        checkIfUserExistsInApplication,
      }}>
      {children}
    </AuthContext.Provider>
    </ThemeProvider>

  );
}


export const withAuthProviderCheck = (WrappedComponent) => {
  return (props) => {
    const userContext = useContext(AuthContext);

    // Check if userContext is available
    if (userContext) {
      return <WrappedComponent {...props} />;
    }

    // If not, wrap the component with UserProvider
    return (
      <AuthProvider>
        <WrappedComponent {...props} />
      </AuthProvider>
    );
  };
};


export default AuthProvider;