import React, { useRef, useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { searchIcon, searchIconFocus } from "../../svgs/svgGerais/search";

type TopSearchProps = {
    onFocus : boolean,
    handleInputFocus : () => void,
    handleInputBlur : () => void,
    handleSearchChange : (text: string) => void,
    searchQuery: string;
}
export const TopSearch : React.FC<TopSearchProps> = ({onFocus, handleInputFocus, handleInputBlur, handleSearchChange, searchQuery}) => {
   
    
    const inputRef = useRef<TextInput>(null);

  
    

    const handleFocusInput = () => {
        inputRef.current?.focus();
    };
    const handleBlurInput = () => {
      
        inputRef.current?.blur();
      
       
    };
    return (
    
        <View
            style = {onFocus === false ? styles.topSearch : styles.topSearchOnFocus}
        >   
        {onFocus == false &&
        <View
        style = {{flexDirection: "row", width: "40%", height:"40%" , gap: 20, alignItems: "center"}}
        >
                <Image source={require("../../../assets/Perfil/PerfilSpotify.png")} style = {{borderRadius: 100, width: 50, height: 50}}/>
                <Text
                    style = {{fontWeight: "bold", color: "white", fontSize: RF(20)}}
                >
                    Buscar
                </Text>
        </View>
        
        }
            

            <View
                style = {onFocus === false ? styles.inputBox : styles.inputBoxOnFocus}
            >
                    <TextInput 
                        placeholder = "O que você quer ouvir?"
                        style = { onFocus === false ? styles.inputTextNoFocus : styles.inputTextOnFocus}
                        placeholderTextColor={onFocus === false ? "black" : "white"}
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                        onFocus={handleInputFocus}
                        clearTextOnFocus = {true}
                        focusable = {onFocus}
                        ref={inputRef}
                        onBlur={handleInputBlur}
                        
                    />
                    <TouchableOpacity
                    style = {{position: "absolute", left: 15, alignItems : "center", marginTop: 6,zIndex: 3}}
                    onPress={handleFocusInput}
                    >
                        <SvgXml
                            xml = {onFocus === false ? searchIcon : searchIconFocus}
                            
                        />
                    </TouchableOpacity>
            </View>
            {onFocus && 
                <TouchableOpacity
                style = {{position: "absolute", right: 3, height: "40%", padding: 10, bottom:10}}
                onPress={handleBlurInput}
            >
                <Text
                    style = {{fontSize: RF(15), color: "white", fontWeight: "bold"}}
                >
                    Cancelar
                </Text>
            </TouchableOpacity>
            }
            
           
            
        </View>
    )

}

const styles = StyleSheet.create({
    topSearch: {
        width: "100%",
        height: "30%",
     
        paddingTop: 50,
        gap: 30,
    },
    inputBox: {
        borderRadius: 5, 
        backgroundColor: "white", 
        width: "95%", 
        height: "45%", 
        alignItems: "center", 
        justifyContent: "center",
        alignSelf: "center"
    },
    inputTextNoFocus: {
        borderRadius: 5, 
        backgroundColor: "white", 
        width: "90%", 
        height: "45%", 
        alignItems: "center", 
        justifyContent: "center",
        paddingHorizontal: 50
    },
    topSearchOnFocus: {
        width: "100%",
        height: "15%",
        
        justifyContent: "flex-end",
        backgroundColor: "#191919",
        paddingLeft: 10
        
    },
    inputTextOnFocus: {
        borderRadius: 8, 
        backgroundColor: "#242424", 
        width: "100%", 
        height: "60%", 
        alignItems: "center", 
        justifyContent: "center",
        paddingHorizontal: 50,
        color: "white",
    },
    inputBoxOnFocus: {
        borderRadius: 8, 
        backgroundColor: "#242424",  
        width: "75%", 
        height: "40%", 
        alignItems: "center", 
        justifyContent: "center",
        marginBottom: 10,
    
        
    },
    
})