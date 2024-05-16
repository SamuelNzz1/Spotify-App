import React from "react";
import { TopConfig } from "../../components/ConfigViewComponents/TopConfigSBLM";
import { ScrollView, View } from "react-native";
import { ProfileButton } from "../../components/ConfigViewComponents/ProfileButtonSBLM";
type ConfigProps = {
    navigation: any
}
export const Configs : React.FC<ConfigProps> = ({navigation}) => {
 return (
    <View style = {{flex: 1, backgroundColor: "#121212"}}>
        <TopConfig 
            navigation={navigation}
        />
        <ScrollView
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {{width: "100%", height: "100%", paddingBottom: 20}}
        >
            <ProfileButton 
                navigation={navigation}
            />

        </ScrollView>

    </View>
 
 )
}