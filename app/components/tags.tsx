import { IconDefinition, IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faRankingStar, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface typeTagsProps {
    label: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    border: string;
    icon: IconDefinition
}

export const TypeTags = ({label, bgColor, textColor, borderColor, border, icon}: typeTagsProps) => {
    return(
        <div className={`${bgColor} ${textColor} ${borderColor} ${border} py-2 px-3 rounded-sm text-xs flex flex-row items-center justify-center`}>
            <FontAwesomeIcon icon={icon} className="text-lg mr-2" />
            <span className="">{label}</span> 
        </div>
    )
}

const difficulty = [
    {level: "Beginner", bgColor: "bg-beginner", icon: faStarHalf},
    {level: "Intermediate", bgColor: "bg-intermediate", icon: faStar},
    {level: "Advanced", bgColor: "bg-advanced", icon: faRankingStar}
]

interface DifficultyTagsProps {
    level: string;
}

export const DifficultyTags = ({ level }: DifficultyTagsProps) => {
    // Find the difficulty object based on the level
    const difficultyObj = difficulty.find(diff => diff.level === level);

    // If level is not found, return null or a default div
    if (!difficultyObj) {
        return null; // or some default div
    }

    return(
        <div className={`${difficultyObj.bgColor} text-dark py-2 px-3 rounded-sm text-xs flex items-center justify-center`}>
            <FontAwesomeIcon icon={difficultyObj.icon} className="text-lg mr-2" />
            <span>{difficultyObj.level}</span>
        </div>
    );
};