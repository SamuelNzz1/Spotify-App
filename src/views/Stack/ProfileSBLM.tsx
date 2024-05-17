import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { arrowBack } from "../../svgs/svgGerais/arrows";
import { pontinhos } from "../../svgs/svgGerais/plusInfo";
import { Playlists } from "../../components/ProfilInfoComponents/PlaylistsSBLM";
import { PerfilEdit } from "../../components/ProfileComponents/PerfilEditSBLM";
type ProfileProps = {
    navigation: any
}

export const Profile : React.FC <ProfileProps> = ({navigation}) => {
    return (
    <View
    style = {styles.container}
    >
        <View
       
        style = {{width: "100%", height: "35%", alignItems: "center", justifyContent: "center", backgroundColor: "#766269"}}
    
        >
            <TouchableOpacity
                style = {{position: "absolute", left: 10, top: 30, padding: 20}}
                onPress={() => navigation.goBack()}
            >
                <SvgXml xml={arrowBack} />
            </TouchableOpacity>
            <TouchableOpacity
                style = {{position: "absolute", right: 20, top: 40}}
            >
                <SvgXml xml={pontinhos} />
            </TouchableOpacity>
            <PerfilEdit />

        </View>
        <View
            style = {{height: "60%", width: "100%"}}
        >
            <View
                style = {{flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 20}}
            >
                <TouchableOpacity
                    style = {[styles.status]}
                >   
                    <Text
                    style={{color: "#B3B3B3", fontSize: RF(10)}}
                    >
                        109
                    </Text>
                    <Text
                        style={{color: "#B3B3B3", fontSize: RF(10)}}
                    >
                        SEGUIDORES
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                     style = {[styles.status]}
                >
                        <Text
                            style={{color: "#B3B3B3", fontSize: RF(10)}}
                        >
                            20
                        </Text>
                        <Text
                            style={{color: "#B3B3B3", fontSize: RF(10)}}
                        >
                            SEGUINDO
                        </Text>

                </TouchableOpacity>
            </View>
            <Playlists 
            
            />
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    status: {
        gap: 5, 
        width: 100,
        height: 50,
        alignItems: "center",
        marginTop: 20
    }

})