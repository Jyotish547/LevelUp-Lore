// Import all headerBanner icons here

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList as overview, faQuestionCircle as defaultIcon, faChessBoard as tactical, faUsersViewfinder as suggested, faBullseye as player, faAnglesUp as advantages, faAnglesDown as disadvantages, faShuffle as countering } from "@fortawesome/free-solid-svg-icons";

import { SingleFormationData } from "@/components/pages/api/formationDetailsByID/[id]";

interface headerBannerProps {
    label: string,
    style: string
}

const getIconForType = (type: string) => {
    switch(type) {
        case "overview":
            return overview;
        case "tactical":
            return tactical;
        case "suggested":
            return suggested;
        case "player":
            return player;
        case "advantages":
            return advantages;
        case "disadvantages":
            return disadvantages;
        case "countering":
            return countering;
        default:
            return defaultIcon;
        
    }
}

export const HeaderBanner = ({label, style}: headerBannerProps) => {
    const formattedLabel = label.toLowerCase().split(" ")[0].toLowerCase();
    return(
        <div className={`flex flex-row items-center px-4 py-2 border-${style} text-${style} border-2 w-fit space-x-2 rounded-md text-xl`}>
            <FontAwesomeIcon icon={getIconForType(formattedLabel)} />
            <span>{label}</span>
        </div>
    )
}