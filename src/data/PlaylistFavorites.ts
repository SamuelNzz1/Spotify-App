import Shazam from "../../assets/Shazam.png";
import Roadtrip from "../../assets/Roadtrip.png";
import Study from "../../assets/Study.png";

export const ImageMapping = {
    Shazam: Shazam,
    Roadtrip: Roadtrip,
    Study: Study,
}
type Playlists = {
    imageCap: any,
    name: string,
    likes: number,
}

export const Playlists : Playlists[] = [
    {
        name: "Shazam",
        imageCap: 'Shazam',
        likes: 10,
    },{
        name: "Roadtrip",
        imageCap: 'Roadtrip',
        likes: 5,
    },{
        name: "Study",
        imageCap:'Study',
        likes: 1,
    }
]