import React from "react";
import { TopConfig } from "../../components/ConfigViewComponents/TopConfigSBLM";
import { ScrollView, StyleSheet, View } from "react-native";
import { ProfileButton } from "../../components/ConfigViewComponents/ProfileButtonSBLM";
import { UsuConfig } from "../../data/UsuConfigOptions";
import { OptionsSettingsButtons } from "../../components/ConfigViewComponents/OptionsSettingsButtonsSBLM";
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
            contentContainerStyle = {{width: "100%", height: "auto", paddingBottom: 40, paddingHorizontal: 15, gap: 30}}
        >
            <ProfileButton 
                navigation={navigation}
            />
            <View
                style = {styles.ButtonsBox}
            >
                {
                    UsuConfig.map( (item, index) => {
                        return(
                            <OptionsSettingsButtons 
                                key = {index}
                                text={item.title}
                            />
                        )
                    })
                }
            </View>


        </ScrollView>

    </View>
 
 )
}
const styles = StyleSheet.create({
    ButtonsBox: {
        alignItems: "center",
        gap: 15
    }
})