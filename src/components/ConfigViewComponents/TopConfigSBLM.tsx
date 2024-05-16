import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { arrowBack } from "../../svgs/svgGerais/arrows";
import { RFValue as RF } from "react-native-responsive-fontsize";
type ConfigView = {
    navigation: any
}

export const TopConfig : React.FC<ConfigView> = ({navigation}) => {
    	return (
        
        <View
            style = {styles.topConfig} 
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style = {{position: "absolute", left: 20, bottom: 20, padding: 10}} 
            >
                <SvgXml 
                    xml={arrowBack} 
                 
                />
            </TouchableOpacity>

            <Text
                style = {{color: "white", fontSize: RF(16), fontWeight: "bold", alignSelf: "center" }}
            >
                Configurar
            </Text>

        </View>
        )    
}

const styles = StyleSheet.create({
    topConfig: { 
        backgroundColor: "#191919",
        width: "100%",
        height: "15%",
        justifyContent: "center"

    }
})