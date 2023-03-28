import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Header } from "../Header";
import { Song } from "../models/SongModel";
import { RootNavigationStackParams } from "../RootNavigationStackParams";
import { Data } from "../SongList";

type ScreenProps = NativeStackScreenProps<RootNavigationStackParams, 'MainScreen'>

type itemProps = {
    item : Song;
    onPress : ()=>void;
    backGroundColor : string;
    colorTitle : string;
    colorAuthor : string
}

const Item = ({item, onPress, backGroundColor, colorTitle, colorAuthor}: itemProps)=>{
    return(
        <TouchableOpacity onPress={onPress}>
           <View className={backGroundColor}>
            <Image className="rounded-[10px]" source={item.img}/>
            <View className="px-5 pt-1">
                <Text className={colorTitle}>{item.title}</Text>
                <Text className={colorAuthor}>{item.author}</Text>
            </View>
        </View> 
        </TouchableOpacity>
    );
}


export const MainScreen : React.FC<ScreenProps> = ({navigation})=>{
    const [selectedId,setSelectedId] = useState<number>();

    const renderItem =({item}: {item:Song})=>{
        const backGroundColor = item.id === selectedId ? "bg-[#8C8C8C] rounded-[15px] mb-4 p-3 flex-row" : "bg-[#8C8C8C]/30 rounded-[15px] mb-4 p-3 flex-row"
        const colorTitle = item.id === selectedId ? "font-bold text-lg text-white" :  'font-bold text-lg text-black';
        const colorAuthor = item.id === selectedId ? "font-light text-white" : 'font-light text-black';
        return(
            <Item 
            item={item}
            backGroundColor={backGroundColor}
            colorTitle={colorTitle}
            colorAuthor={colorAuthor}
            onPress={()=>{
                setSelectedId(item.id)
                navigation.navigate("DetailScreen",item);
            }}
            />
        );
    };
    return(
        <View className="flex-1 bg-white px-5">
            <Header/>
            <Text className="text-lg font-semibold opacity-60">Song</Text>
            <FlatList
            data={Data}
            renderItem = {renderItem}
            keyExtractor = {(item)=>item.id.toString()}
            extraData = {selectedId}
            className="py-3"/>
        </View>
    );
}