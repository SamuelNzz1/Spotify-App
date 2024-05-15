import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
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

            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    boxEpFYou: {
        width: "100%",
        height: "30%",
       
        gap: 20
    },
    scrollEps: {
        width: 1000,
        height: "90%",
        gap: 50, 
        paddingRight: 10
        
    }

})