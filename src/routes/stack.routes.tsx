import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Configs } from "../views/Stack/ConfigSBLM";
import Tabs from "./tab.routes";
import { Home } from "../views/Tab/HomeSBLM";
import { Profile } from "../views/Stack/ProfileSBLM";
const Stack : any= createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Config" component={Configs} />
                <Stack.Screen name="Profile" component={Profile}/>
            </>
        </Stack.Navigator>
        )
}