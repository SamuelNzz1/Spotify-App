import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { WelcomeConfig } from "../../components/WelcomeConfigSLB";
import { OptionsSounds } from "../../components/OptionsSoundsComponents/OptionsSoundsSLB";
import { EpisodeFYou } from "../../components/EpisodeFYouSLB";

type HomeProps = {
navigation : any;
}
export const Home :  React.FC<HomeProps> = ({navigation}) => {
    return(
        <ScrollView
            style = {styles.scroll}
            showsVerticalScrollIndicator = {false}
        >
            <ImageBackground
                source={require("../../../assets/backgroundSpotify.png")}
                style = {styles.container}
                resizeMode="cover"
                
            >   
                <WelcomeConfig
                    navigation={navigation}
                    styless= {styles.p}
                />
                <OptionsSounds
                  stylesss = {styles.p}
                />
                <EpisodeFYou 
                    stylesss={styles.p}
                />

                
                    
               
                
            </ImageBackground>
        </ScrollView>
    )
} 

export const styles = StyleSheet.create({
    container : {
       
        width: "100%",
        height: 1000,
        resizeMode: "cover",
        gap: 20,
        
       
    },
    scroll: {
        height: 500,
        width: "100%",
        backgroundColor: "#121212",
        paddingBottom: 20,
       

    },
    p : {
        paddingHorizontal: 10,
    }

   
})