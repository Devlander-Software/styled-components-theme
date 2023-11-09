import LogRocket from '@logrocket/react-native';
import { isEmpty } from "lodash";
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { logRocketSlug } from "@devlander/rawoutdoors-env";
import { ErrorBoundary } from "react-error-boundary";
import { Text, View } from "react-native";
import { getErrorMessageByField } from 'src/packages/react-native-shared-types/bundle/dist';



export type ErrorsContextProps = {
  children: JSX.Element | JSX.Element[];
};

interface ErrorsContextPayload {
  errors: { [key: string]: any };
  setErrors: (
    errors: { [key: string]: any },
    methodName?: string,
    openToast?: boolean
  ) => void;
  errorsIsEmpty: boolean;
  errorAlertOpened: boolean;
  getErrorMessageByField: typeof getErrorMessageByField;
}

const ErrorsContext = createContext<ErrorsContextPayload>({
  errors: {},
  errorsIsEmpty: true,
  setErrors: () => {},
  errorAlertOpened: false,
  getErrorMessageByField: (field) => `${field}`,
});

const { Provider } = ErrorsContext;

const ErrorsProvider: React.FC<ErrorsContextProps> = ({ children }) => {
  const [errorAlertOpened, setErrorAlertOpened] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});

  const errorsIsEmpty = useMemo(() => isEmpty(errors), [errors]);

  const setErrorsFunc = (
    errors: object,
    methodName?: string,
    openToast?: boolean
  ): void => {
    if (methodName) {
      console.log(methodName, JSON.stringify(errors));
    }
    if (openToast) {
    //   Toast.show(JSON.stringify(errors), {
    //     duration: environmentName !== "local" ? 3000 : 5000,
    //     onHide: () => setErrorAlertOpened(false),
    //   });
    }
    setErrors(errors);
  };

  useEffect(() => {
    LogRocket.init(logRocketSlug);
  }, []);

  return (
    <Provider
      value={{
        errors,
        setErrors: setErrorsFunc,
        errorsIsEmpty,
        errorAlertOpened,
        getErrorMessageByField,
      }}
    >
      <ErrorBoundary
        fallback={
          <View>
            <Text>Something went wrong</Text>
          </View>
        }
      >
        {children}
      </ErrorBoundary>
    </Provider>
  );
};

export const useErrorsContext = (): ErrorsContextPayload =>
  useContext(ErrorsContext);

export default ErrorsProvider;
