import { View,Image } from "react-native";

export const Header = ()=>{
    return(
        <View className="pt-5 pb-3 bg-white">
            <Image source={require('../assets/Group54.png')}/>
        </View>
    );
}