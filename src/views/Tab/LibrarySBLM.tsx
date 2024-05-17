import React from "react";
import { Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
type LibraryProps = {


}
export const Library: React.FC<LibraryProps> = () => {
    return (
        <View
            style = {{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#121212"}}
        >
            <Text
                style = {{color: "white", fontWeight: "bold", fontSize: RF(30)}}
            >
                Em progresso...
            </Text>
        </View>
    )

}