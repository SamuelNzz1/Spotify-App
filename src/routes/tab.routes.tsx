import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import { RFValue as RF } from "react-native-responsive-fontsize";

import { HomeSelected, HomeUnselected, SearchSelected, SearchUnselected, LibrarySelected, LibraryUnselected } from "../svgs/iconsTab";

import { Home } from "../views/Tab/HomeSBLM";
import { Search } from "../views/Tab/SearchSBLM";
import { Library } from "../views/Tab/LibrarySBLM";

import StackRoutes from "./stack.routes";

const Tab : any = createBottomTabNavigator();
export default function Tabs() {
    return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false, 
          tabBarStyle: {
            backgroundColor:  '#121212',
            height: "15%",
            borderTopColor: "transparent"
          }, 
        }}>
            <Tab.Screen 
                name="Início" 
                component={StackRoutes}
                options={({ route }: any) => ({
                    
                    tabBarIcon: ({ focused } : any) => (
                    <SvgXml xml={focused ? HomeSelected : HomeUnselected} />
                    ),
                    tabBarLabelStyle: {
                      fontSize: RF(13), // Tamanho do texto
                      position: "absolute",
                      bottom: 5,
                      color:  "white"
                    
                    },
            })}
            />

            <Tab.Screen 
                name="Buscar" 
                component={Search}
                options={({ route }: any) => ({
                
                    tabBarIcon: ({ focused } : any) => (
                      
                    <SvgXml xml={focused ? SearchSelected : SearchUnselected} />
                    ),
                    tabBarLabelStyle: {
                      fontSize: RF(13),  // Tamanho do texto
                      position: "absolute",
                      bottom: 5,
                      color:  "white"
                    },
            })}
            />
    

            <Tab.Screen 
                name="Sua Biblioteca" 
                component={Library}
                options={({ route }: any) => ({
                    
                    tabBarIcon: ({ focused } : any) => (
                    <SvgXml xml={focused ? LibrarySelected : LibraryUnselected} />
                    ),
                    tabBarLabelStyle: {
                      fontSize: RF(13), // Tamanho do texto
                      position: "absolute",
                      bottom: 5,
                      color:  "white"
                    },
            })}
            />

    
        
        </Tab.Navigator>
      );
    

}