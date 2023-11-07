import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export interface TabScreens {
  name: string;
 

  options: {
    title: string;
    tabBarIcon: (props: { color: string; size: number }) => React.ReactNode;
    header: () => React.ReactNode;
  
  };
}



function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    initialRouteName="Home"
     
    > 

     


    </Tabs>
  );
}

export default TabLayout;