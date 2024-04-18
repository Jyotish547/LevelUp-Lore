import { useState, useEffect } from "react";

import '../globals.css'

import BorderButton from "./buttons";
import { IconButton } from "./buttons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faShieldHalved, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconsMap: { [key: string]: IconProp } = {
    star: faStar,
    defense: faShieldHalved
}

import { FormType, DiffType } from "./types/fc24Type";

const F1Filter: React.FC<{ selectForm: FormType[], setSelectForm: React.Dispatch<React.SetStateAction<FormType[]>> }> = ({ selectForm, setSelectForm }) => {

    const [isPopular, setIsPopular] = useState<boolean>(false);
    const [selectDiff, setSelectDiff] = useState<DiffType[]>([]);

    const togglePopular = () => setIsPopular(!isPopular);

    const handleForm = (form: FormType) => {
        setSelectForm(prevForm =>
            prevForm.includes(form) ? prevForm.filter(f => f !== form) : [...prevForm, form]
        );
    };

    const handleDiff = (diff: DiffType) => {
        setSelectDiff(prevDiff => 
            prevDiff.includes(diff) ? prevDiff.filter(d => d !== diff) : [...prevDiff, diff]
        );
    };

    function getBackgroundClass(form: FormType): string {
        switch (form) {
            case 'Balanced':
                return 'bg-balanced';
            case 'Offensive':
                return 'bg-offensive';
            case 'Defensive':
                return 'bg-defensive';
            default:
                return '';
        }
    }
    function getIconClass(form: FormType): IconProp {
        switch (form) {
            case 'Balanced':
                return faShieldHalved;
            case 'Offensive':
                return faStar;
            case 'Defensive':
                return faShieldHalved;
            default:
                return faStar;
        }
    }

    return(
        <div className="flex flex-row justify-between items-center formation-filters w-full h-fit">
            {/* Filters */}
            <IconButton
                label="Popular"
                icon={iconsMap['star']}
                onClick={togglePopular}
                className={`flex flex-row items-center py-2 px-4 rounded-md border-2 border-eafc font-semibold space-x-2 ${isPopular ? 'popular-f1 active-f1 bg-eafc shadow-md shadow-emerald-700/50 text-dark': 'bg-black'}`}
            />
            <div className="flex flex-row justify-between items-center w-fit h-full rounded-md shadow-md shadow-gray-800/50">
                {(['Defensive', 'Balanced', 'Offensive'] as FormType[]).map((form, index)=> (
                    <button
                        key={form}
                        onClick={() => handleForm(form)}
                        className={
                            `py-2 px-4 border-r-2 border-gray-800 space-x-2 h-full bg-clip-padding
                            ${selectForm.includes(form) ? getBackgroundClass(form) : ''}
                            ${index === 0 && selectForm.includes(form) ? 'rounded-l-md' : ''}
                            ${index === 2 ? 'rounded-r-md border-none' : ''}
                            `}
                    >
                        <FontAwesomeIcon icon={getIconClass(form)} />
                        <span>{form}</span>
                    </button>
                ))}
            </div>
        </div> 
    )
}

export { F1Filter }