import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { imageMapping } from "../../data/OptionsEp";

type propsButton = {
    imageCap: any,
    titulo: string

}
export const EpisodeButton : React.FC<propsButton> = ({titulo, imageCap}) => {
    
    const backgroundImage = imageMapping[imageCap];


    return (
    <TouchableOpacity
        style = { styles.buttonEp}
    >
        <View
         style = {styles.imageEp}
        >
            <Image  source={backgroundImage} style = {{width: "100%", height:"100%",borderRadius: 10}} resizeMode="contain"/>
        </View>
        <View style = {{width: "100%"}}>
            <Text style={{color: "#FFFFFF", width: "100%"}}>{titulo}</Text>
        </View>
    
    </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    buttonEp: {
        borderRadius: 10,
        width: 180,
        gap: 10
        
    },
    imageEp: {
        height: 180,
        width: 180,
     
        borderRadius: 10
    }
})