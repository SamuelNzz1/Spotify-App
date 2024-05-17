import React from "react";
import { SvgXml } from "react-native-svg";
import { arrowGo } from "../../svgs/svgGerais/arrows";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { imageMapping } from "../../data/PlaylistFavorites";
type ButtonProps = {
   name: string,
   imageCap: any,
   likes: number,
   key2: number,
}
export const ButtonPlaylist : React.FC<ButtonProps> = ({imageCap, name, likes, key2}) => {
    const backgroundImage = imageMapping[imageCap];
    return (
    
    <TouchableOpacity
        style = {styles.buttonPlaylist}
    >
        {key2 != 3 ? 
        <> 
                <View
                    style = {styles.boxLeft}
                >
                    <Image source={backgroundImage} style = {{width: "100%", height: "100%"}}  resizeMode="cover" />
                </View>
                <View
                style = {styles.boxRight}
                >
                    <Text style = {{fontWeight: "bold", color : "white", fontSize: RF(15)}}>
                        {name}
                    </Text>
                    <Text  style = {{ color : "#B3B3B3", fontSize: RF(12)}}>
                        {likes} likes
                    </Text>
                </View>

                <SvgXml 
                xml={arrowGo}
                style = {{position: "absolute", right: 5, alignSelf: "center"}}
                />
        </>
        : 
        <>
            <Text
                style = {{color: "white", fontWeight: "bold", fontSize: RF(15)}}
            >
               {name}
            </Text>

            <SvgXml 
            xml={arrowGo}
            style = {{position: "absolute", right: 5, alignSelf: "center"}}
            />
        </>
        }
        
    </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    buttonPlaylist: {
        flexDirection: "row",
        width: "100%",
        height: "30%",
        backgroundColor: "transparent",
        alignItems : "center"

    },
    boxLeft: {
        width: "20%",
        height: "100%",
     
    },
    boxRight: {
        width: "80%",
        height: "100%",
        alignItems: "flex-start",
        paddingLeft: 10,
        gap: 10,
        justifyContent: "flex-start",
        
    }
})