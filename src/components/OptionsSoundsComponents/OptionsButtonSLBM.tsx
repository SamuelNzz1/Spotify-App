import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";

import { imageMapping } from "../../data/OptionsPlay";
type OptionsProps = {
    name: string,
    imageCap: any

}
export const OptionsButtons : React.FC<OptionsProps>  = ({name, imageCap}) => {
    const backgroundImage = imageMapping[imageCap];

    return (
        <TouchableOpacity
            style = {styles.boxOptions}
        >
            <View
                style = {styles.boxLeft}
           
            >
                <Image source={backgroundImage} style = {{width: "100%", height: "100%"}} resizeMode="cover" />
            </View>

            <View
                style = {styles.boxRight}
            >
                <Text
                    style = {{color: "white", fontSize: RF(12), width: "70%", fontWeight: "bold"}}
                >
                    {name}
                </Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boxOptions: {
        flexDirection: "row",
        height: "35%", 
        width: "45%",
       
        borderRadius: 10,
        backgroundColor: "#444444"
    
    },
    boxLeft: {
        height: "100%",
        width: "35%",
       
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    boxRight: {
        height: "100%",
        width: "65%",
     
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})