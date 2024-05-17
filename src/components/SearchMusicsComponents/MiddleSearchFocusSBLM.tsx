import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ButtonMusics } from "./ButtonMusicsSBLM";
import { OptionsPlay } from "../../data/OptionsPlay";
type MiddleProps = {
    searchQuery: string,
}
export const MiddleSearchFocus: React.FC<MiddleProps> = ({searchQuery}) => {
    const filteredOptions = OptionsPlay.filter(option =>
        option.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        .includes(
          searchQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        )
      );
    return (
    <ScrollView
        contentContainerStyle = {styles.middleFocus}
        showsVerticalScrollIndicator = {false}
   >
        {
            filteredOptions.map((item, index) => {
                return (
                    <ButtonMusics
                        key={index}
                        name={item.name}
                        imageCap={item.imageCap}
                        artist={item.artist}
                        option={item.option}
                    />
                )
            } )

        }


    </ScrollView>
    )   
}

const styles = StyleSheet.create({
    middleFocus :{
        width: "100%",
        height: "85%",
      
        paddingBottom: 20, 
        paddingHorizontal: 10,
        gap: 10,
        paddingTop: 20,
        
    }
})