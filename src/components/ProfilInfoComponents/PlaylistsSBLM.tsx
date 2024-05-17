import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
type PlaylistsProps = {


}
export const Playlists : React.FC<PlaylistsProps> = () => {
    return (
    <View
        style = {styles.playlists}
    >   
        <Text
            style = {{fontSize: RF(25),color: "white", fontWeight: "bold"}}
        >
            Playlists
        </Text>
        
    </View>
    )
}

const styles = StyleSheet.create({
    playlists: {
        paddingHorizontal: 10,
        height: "70%",
        backgroundColor: "blue",
        width: "100%"
    }
})