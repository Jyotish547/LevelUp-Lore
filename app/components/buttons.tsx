import '../globals.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface BorderButtonProps {
    label: string;
}

interface IconButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    icon: IconProp;
}

export default function BorderButton({ label }: BorderButtonProps) {
    return(
        <button className='py-2 px-4 bg-black border-2 border-eafc rounded-md'>
            {label}
        </button>
    )
}

function IconButton({ label, className, icon, onClick }: IconButtonProps) {
    return(
        <button className={className} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
        </button>
    )
}

export { IconButton };