import { createStackNavigator } from "@react-navigation/stack"
import { View, Image, Text } from "react-native";
import { Header } from "./Header";
import { RootNavigationStackParams } from "./RootNavigationStackParams";
import { DetailScreen } from "./screens/DetialScreen";
import { MainScreen } from "./screens/MainScreen";


const stack = createStackNavigator<RootNavigationStackParams>();

export const RootNavigationStack : React.FC = ()=>{
    return(
        <stack.Navigator
        initialRouteName="MainScreen"
        >
            <stack.Screen 
            name="MainScreen"
            component={MainScreen}
            options={{
                headerShown: false
            }}
            />

            <stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{
                headerShown: false
            }}
            />
        </stack.Navigator>
    )
}