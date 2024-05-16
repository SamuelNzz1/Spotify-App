import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PerfilUsu } from "../../data/PerfilUsu";
import { imageMapping } from "../../data/PerfilUsu";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { arrowGo } from "../../svgs/svgGerais/arrows";
type ProfileProps = {
    navigation: any
}
export const ProfileButton: React.FC<ProfileProps> = ({navigation}) => {
    
    const backgroundImage = imageMapping[PerfilUsu[0].imageCap];

    return (
    <TouchableOpacity
        style = {styles.profileButton}
    >
        <View 
            style = {styles.leftBox}
        >
            <View
                style = {styles.boxImagePerfil}
            >
                <Image
                    source={require("../../../assets/Perfil/PerfilSpotify.png")}
                    style = {{width: "100%", height: "100%", borderRadius:100 }} 
                    resizeMode="cover"
                />
            </View>

        </View>
        <View 
            style = {styles.rightBox}
        >
            <Text
                 style = {{color: "white", fontWeight: "bold", fontSize: RF(20)}}
            >
                {PerfilUsu[0].name}
            </Text>
            <Text
                 style = {{color: "#B3B3B3", fontSize: RF(12)}}
            >
                Ver Perfil
            </Text>
            <SvgXml xml={arrowGo} style = {{position: "absolute", right: 20}}/>

        </View>

    </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    profileButton: {
        flexDirection: "row",
        width: "100%",
        height: "20%"
    },
    leftBox: {
        height: "100%",
        width: "20%",
  
        justifyContent: "center",
        alignItems: "center"
    },
    rightBox: {
        height: "100%",
        width: "80%",
        justifyContent: "center", 
        alignItems: "flex-start",
        gap: 10,
        paddingLeft: 20
     
    },
    boxImagePerfil: {
        width: 65,
        height: 65,
        borderRadius: 100,
               
    }
})