interface typeTagsProps {
    label: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    border: string;
}

export const TypeTags = ({label, bgColor, textColor, borderColor, border}: typeTagsProps) => {
    return(
        <div className={`${bgColor} ${textColor} ${borderColor} ${border} py-2 px-4 rounded-md flex justify-center`}>
            {label} 
        </div>
    )
}

const difficulty = [
    {level: "Beginner", bgColor: "bg-beginner", textColor: "text-dark"},
    {level: "Intermediate", bgColor: "bg-intermediate", textColor: "text-dark"},
    {level: "Advanced", bgColor: "bg-advanced", textColor: "text-white"}
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
        <div className={`${difficultyObj.bgColor} ${difficultyObj.textColor} py-2 px-4 rounded-md flex justify-center`}>
            {difficultyObj.level} 
        </div>
    );
};