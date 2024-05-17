import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { arrowGo } from "../../svgs/svgGerais/arrows";
import { SvgXml } from "react-native-svg";
type SettingsProps = {
    text : string
}
export const OptionsSettingsButtons : React.FC<SettingsProps> = ({text}) => {
    return (
    <TouchableOpacity
        style = {styles.buttonStyle}
    >
        <Text
            style = {{ color : "white", fontSize: RF(14)}}
        >
            {text}
        </Text>
        <SvgXml 
            xml={arrowGo}
            style = {{position: "absolute", right: 5, alignSelf: "center"}}
        />
    </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    buttonStyle : {
        width : "100%",
        height: 30,
        justifyContent: "center",
        alignItems: "flex-start",

    }   
})