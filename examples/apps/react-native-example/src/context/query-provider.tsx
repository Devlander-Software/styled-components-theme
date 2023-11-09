import AsyncStorage from '@react-native-async-storage/async-storage'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import type {ReactNode, FC} from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {

        }
    }
})

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage
})

const QueryProvider: FC<{
    children: ReactNode
}> = ({children}) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister: asyncStoragePersister }}
  >
    {children}
  </PersistQueryClientProvider>
);

export default QueryProvider;