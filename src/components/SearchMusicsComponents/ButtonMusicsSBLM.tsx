import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { arrowGo } from "../../svgs/svgGerais/arrows";
import { imageMapping } from "../../data/OptionsPlay";
type MusicsProps = {
    name: string,
 imageCap: string,
 artist?: boolean,
 option?: string,
}
export const ButtonMusics : React.FC<MusicsProps> = ({name, imageCap, artist, option}) => {
    const backgroundImage = imageMapping[imageCap];
    return (
        <TouchableOpacity
            style = {styles.buttonMusic}
        >
            <View
                style = {{width: "15%", height: "100%"  }}
            >
                <Image source={backgroundImage} style = { [{width: "100%", height: "100%", }, artist && {borderRadius: 100}  ] } resizeMode="cover" />
            </View>
            <View
                style = {{width: "85%", height: "100%", gap:5, justifyContent: "center", marginLeft: 20}}
            >
                <Text
                    style = {{color: "white", fontWeight: "bold", fontSize: RF(15)}}
                >
                    {name}
                </Text>
                <Text
                    style = {{color: "#A7A7A7", fontSize: RF(13)}}
                >
                    {option}
                </Text>
            </View>

            <SvgXml 
                xml={arrowGo}
                style={{position: "absolute", alignSelf: "center", right: 5}}
            />
        </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    buttonMusic: {
        width: "100%",
        height: "15%",
        backgroundColor: "transparent",
        flexDirection: "row"

    }
})