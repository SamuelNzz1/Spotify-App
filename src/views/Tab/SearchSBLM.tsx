import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TopSearch } from "../../components/SearchMusicsComponents/TopSearchMusicsSBLM";
import { MiddleSearchFocus } from "../../components/SearchMusicsComponents/MiddleSearchFocusSBLM";

type SearchProps = {
navigation: any,


}
export const Search : React.FC<SearchProps> = ( {navigation} ) =>  {
    const [onFocus, setOnFocus] = useState<boolean>(false);
    const handleInputFocus = () => {
        setOnFocus(true);  
    };
    const handleInputBlur = () => {
        setOnFocus(false);
      };

      const [searchQuery, setSearchQuery] = useState<string>(""); 
      const handleSearchChange = (text: string) => {
        setSearchQuery(text);  
    };

    return (
    <View
        style = {onFocus === false ? styles.container : styles.container2}
    >
        <TopSearch 
            onFocus = {onFocus}
            handleInputBlur={handleInputBlur}
            handleInputFocus={handleInputFocus}
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
        />
        {onFocus ?

            <MiddleSearchFocus 
                    searchQuery={searchQuery}
            />

            : 
            <></>
        }
        
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 10

    },
    container2: {
        flex: 1,
        backgroundColor: "#121212",
      

    }
})