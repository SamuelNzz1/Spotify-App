import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { configOptions } from "../data/configOptions";
import {SvgXml} from "react-native-svg";
type ConfigProps = {
    navigation : any,
    styless? : any[] | any, 

}

export const WelcomeConfig: React.FC <ConfigProps> = ({navigation, styless}) => {
   
    return (
    <View
        style = {[styles.boxWelcome, styless ]}
    >
        <Text style = {styles.welcomeText}>
            Boa tarde
        </Text>
         <View
            style = {styles.configOp}
         >
            {
                configOptions.map((item, index) => {
                    return (

                        <TouchableOpacity 
                            key = {index}
                            onPress={index === 2 ? () => navigation.navigate("config") : undefined}
                        >
                            
                            <SvgXml xml={item.svg}  />
                        </TouchableOpacity>
                    )
                })
            }

         </View>

    </View>
    )

}

const styles = StyleSheet.create({
    boxWelcome: {
        width: "100%",
        height: "10%",
        alignItems: "flex-end",
        flexDirection: "row",

       

    },
    welcomeText: {
        color: "white",
        fontSize: RF(25),
        fontWeight: "bold",
    },
    configOp: {
        flexDirection: 'row',
        gap: 25,
        position: "absolute",
        right: 10,
        alignSelf: "flex-end"

    }
})