// Import all headerBanner icons here

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList as overview } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle as defaultIcon } from "@fortawesome/free-solid-svg-icons";
import { faChessBoard as tactical } from "@fortawesome/free-solid-svg-icons";

import { FormationData } from "../game/[id]/page";

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