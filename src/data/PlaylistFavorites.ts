import Shazam from "../../assets/Shazam.png";
import Roadtrip from "../../assets/Roadtrip.png";
import Study from "../../assets/Study.png";

export const imageMapping : any = {
    Shazam: Shazam,
    Roadtrip: Roadtrip,
    Study: Study,
}
type Playlists = {
    imageCap?: any,
    name: string,
    likes: number,
}

export const PlaylistssOptions : Playlists[] = [
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
    },
    {
        name: "See all playlists",
        imageCap:'Study',
        likes: 1,
    }
]