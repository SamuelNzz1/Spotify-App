import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";

type HomeProps = {
navigation : any;
}
export const Home :  React.FC<HomeProps> = ({navigation}) => {
    return(
        <ScrollView
            style = {styles.scroll}
        >
            <ImageBackground
                source={require("../../../assets/backgroundSpotify.png")}
                style = {styles.container}
                resizeMode="cover"
            >
                    
                
                    
               
                
            </ImageBackground>
        </ScrollView>
    )
} 

export const styles = StyleSheet.create({
    container : {
       
        width: "100%",
        height: 1000,
        resizeMode: "cover",
        justifyContent: "center",
    },
    scroll: {
        height: 500,
        width: "100%",
        backgroundColor: "#121212",

    },
   
})