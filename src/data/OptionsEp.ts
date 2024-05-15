import Discover from "../../assets/optionsEps/Discover.png";
import EpFYou2 from "../../assets/optionsEps/EpFYou2.png";
import EpFYou3 from "../../assets/optionsEps/EpFYou3.png";

type OptionsEp = {
    imageCap : any,
    titulo: string

}

export const imageMapping : any = {
    Discover: Discover,
    EpFYou2: EpFYou2,
    EpFYou3: EpFYou3,
};

export const OptionsEP : OptionsEp[] = [
    {
        titulo: "Sua mixtape semanal de músicas novas. Desfrute de novas músicas",
        imageCap: 'Discover'
    },

]