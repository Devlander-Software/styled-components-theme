import { useRootNavigationState, Redirect } from 'expo-router';
import 'expo-dev-client';

export default function App() {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  console.log(rootNavigationState?.key)

  return <Redirect href={'/'} />
}