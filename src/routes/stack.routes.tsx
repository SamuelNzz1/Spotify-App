import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack : any= createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                
            </>
        </Stack.Navigator>
        )
}