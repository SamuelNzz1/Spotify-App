import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { EpisodeButton } from "./EpisodeButton";
import { OptionsEP } from "../../data/OptionsEp";
type EpisodesProps = {
 stylesss? : any
    
} 
export const EpisodeFYou : React.FC<EpisodesProps> = ({stylesss}) => { 
    return (
        <View
            style = { [styles.boxEpFYou, stylesss ]}
        >
            <Text
                style = {{fontSize: RF(25), fontWeight: "bold", color: "white"}}
            >
                Episódios para você
            </Text>
            <ScrollView
                contentContainerStyle = {styles.scrollEps}
                showsHorizontalScrollIndicator = {false}
                horizontal
            >
                 {
                OptionsEP.map((item, index) => {
                return (
                    <EpisodeButton
                        key={index}
                        titulo={item.titulo} 
                        imageCap={item.imageCap}    
                    />
                )   
            })
        }
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    boxEpFYou: {
        width: "100%",
        height: "35%",
        gap: 20,

    },
    scrollEps: {
        width: "auto",
        height: "90%",
        gap: 50, 
        paddingRight: 10
        
    }

})