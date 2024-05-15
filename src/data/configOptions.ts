type ConfigItem = {
    name: string,
    svg: string,
    action?: () => void,

}
import {notification, recents, settings} from "../svgs/iconsConfig";





export const configOptions : ConfigItem[]  = [
    {
        name: "notification",
        svg: notification
    },
    {
        name: "recents",
        svg: recents
    },
    {
        name: "settings",
        svg: settings
    }
]