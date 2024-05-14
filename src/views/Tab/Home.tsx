import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

type HomeProps = {
navigation : any;
}
export const Home :  React.FC<HomeProps> = ({navigation}) => {
    return(
        <ImageBackground
            source={require("../../../assets/backgroundSpotify.png")}
            style = {styles.container}
        >
            

        </ImageBackground>

    )
} 

export const styles = StyleSheet.create({
    container : {
        flex: 1,

    },

})