import LikedSongs from "../../assets/optionsSongs/LikedSongs.png";
import Augustten from "../../assets/optionsSongs/Augustten.png";
import Emotional from "../../assets/optionsSongs/Emotional.png";
import Place from "../../assets/optionsSongs/Place.png";

export const imageMapping : any = {
    Augustten: Augustten,
    Emotional: Emotional,
    Place: Place,
    LikedSongs: LikedSongs, 

};
type Options = {
 name: string,
 imageCap: string,
}


export const OptionsPlay : Options[] = [
    {
        name: "Músicas Curtidas",
        imageCap: 'LikedSongs'
    },
    {
        name: "Augustten Ft Jhesy 😇",
        imageCap: 'Augustten'
    },
    {
        name: "Emotional Songs",
        imageCap: 'Emotional'
    },
    {
        name: "A Place We Know",
        imageCap: 'Place'
    }

]