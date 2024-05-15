import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Configs } from "../views/Stack/ConfigSLB";
import Tabs from "./tab.routes";
const Stack : any= createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                <Stack.Screen name="Home" component={Tabs} />
            
            </>
        </Stack.Navigator>
        )
}