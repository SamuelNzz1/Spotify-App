import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PerfilUsu } from "../../data/PerfilUsu";
import { imageMapping } from "../../data/PerfilUsu";
import { RFValue as RF } from "react-native-responsive-fontsize";
type PerfilProps = {

}
export const PerfilEdit : React.FC<PerfilProps> = () => {
    const imageCap = PerfilUsu[0].imageCap;
    const backgroundImage = imageMapping[imageCap];
    return (
    <View
        style = {styles.editPerfil} 
    >
        <View
            style = {styles.boxPerfilPic}
        >
            <Image
                source={require("../../../assets/Perfil/PerfilSpotify.png")}
                style = {{height: "100%", width: "100%", }}
                resizeMode="cover"
            />
            
        </View>
        <Text
                style = {{fontSize: RF(17), color: "white", fontWeight : "bold", width: "auto" }}
            >
                {PerfilUsu[0].name}
            </Text>
            <TouchableOpacity
            style = {{width: 100, height: 40, backgroundColor: "#3E3F3F", alignItems: "center", justifyContent: "center", borderRadius: 100, padding: 10 }}
            >
                <Text
                    style = {{color:"white", fontWeight: "bold", fontSize: RF(12)}}
                >
                    Editar perfil
                </Text>
            </TouchableOpacity>
    </View>
     )
}
const styles = StyleSheet.create({
    editPerfil: {
            width: 180,
            height: 170,
           
            alignItems: "center",
            gap: 10
    },
    boxPerfilPic: {
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow: "hidden",
        
       
      
    }

})