import { useAssets } from "expo-asset";
import { router } from "expo-router";
import { View } from "react-native";
import { useAuth } from "../../context/auth";

function SignIn() {
  const { signIn, toggleGuest } = useAuth();
 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     
    </View>
  );
}

export default SignIn;
