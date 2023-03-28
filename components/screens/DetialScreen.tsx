import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { RootNavigationStackParams } from "../RootNavigationStackParams";
import Slider from "@react-native-community/slider";
import { Pallete } from "../../assets/colors";
import { useState } from "react";

type screenProps = NativeStackScreenProps<RootNavigationStackParams, 'DetailScreen' >;

export const DetailScreen : React.FC<screenProps> = ({navigation, route}) =>{
    const [isPressed, setIsPressed] = useState(false);
    const reciveData = route.params;
    return(
        <View className="flex-1 bg-[#4E3012] py-5 px-6">
            <View className="flex-row justify-between py-5">
                <Pressable onPress={()=>navigation.goBack()}>
                <Feather name="chevron-down" size={24} color="white"/>
                </Pressable>
                <Pressable>
                    <Feather name="more-vertical" size={24} color="white"/>
                </Pressable>
            </View>
            <View className="w-full h-1/2 items-center justify-center">
                <Image className="w-full h-full rounded-[15px]" source = {reciveData.DetailImg} />
            </View>
            <View className=" py-5 justify-start">
                <Text className="font-bold color-white text-[18px]">{reciveData.title}</Text>
                <Text className="font-light color-white text-[14px]">{reciveData.author}</Text>
            </View>
            <Slider
                style={{width: 345}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor= {Pallete.sliderFill}
                maximumTrackTintColor= {Pallete.slider}
                thumbTintColor = {Pallete.sliderFill}
            />                   
            <View className="flex-row py-10 px-5 justify-between items-center">
                <TouchableOpacity>
                    <Feather name="shuffle" size={24} color="white"/>
                </TouchableOpacity>

                <View className="flex-row items-center">
                    <TouchableOpacity className="px-2">
                        <Feather name="skip-back" size={24} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-2"
                        onPress={()=>{
                            setIsPressed(!isPressed);
                        }}
                    >
                        <Feather 
                            name={isPressed ? 'pause' : 'play'} 
                            size={34} 
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity className="px-2">
                        <Feather name="skip-forward" size={24} color="white"/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Feather name="repeat" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}