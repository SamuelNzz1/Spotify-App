import React from "react"
import { StyleSheet, View } from "react-native"
import { OptionsButtons } from "./OptionsButtonSLBM"
import { OptionsPlay } from "../../data/OptionsPlay"
type OptionsSProps = {
stylesss?: any,

}

export const OptionsSounds : React.FC <OptionsSProps> = ({stylesss}) => {
    return (
    <View
        style = { [styles.boxOptionsSounds , stylesss]}
    >
        {
            OptionsPlay.map((item, index) => {
                return (
                    <OptionsButtons
                        key={index}
                        name={item.name} 
                        imageCap={item.imageCap}    
                    />
                )   
            })
        }
      
    </View>
    )

}

const styles = StyleSheet.create({
    boxOptionsSounds: {
        height: 200,
        width: "100%",
        paddingVertical: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    }

})