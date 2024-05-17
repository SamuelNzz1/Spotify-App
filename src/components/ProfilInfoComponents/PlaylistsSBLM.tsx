import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { ButtonPlaylist } from "./ButtonPlaylistSBLM";
import { PlaylistssOptions } from "../../data/PlaylistFavorites";
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
        <View
         style = {{alignItems : "center", width: "100%", gap: 10, flex: 1}}
        >
            {   
                PlaylistssOptions.map((item, index) => {
                    return (
                    <ButtonPlaylist
                        key = {index}
                        key2 = {index}
                        name={item.name}
                        imageCap={item.imageCap}
                        likes={item.likes} 
                    />
                    )
                })
            }
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    playlists: {
        paddingHorizontal: 10,
        height: "70%",
        width: "100%",
        gap: 10
    }
})