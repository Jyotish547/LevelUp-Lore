import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faSoccerBall, faRunning, faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import logoIcon from '../../public/assets/logos/LULIcon.svg';
import logoDef from '../../public/assets/logos/LULDefault.svg';
import logoWhite from '../../public/assets/logos/LULWhite.svg';

export const logos = {
  def: logoDef,
  white: logoWhite,
  icon: logoIcon
}

export const getIconForPosition = (position: string): IconDefinition => {
    switch (position) {
      case 'CB':
      case 'WB':
        return faShieldHalved; // Defense
      case 'CM':
      case 'CAM':
      case 'CDM':
        return faChessKnight; // Midfield
      case 'ST':
      case 'RW':
      case 'LW':
        return faSoccerBall; // Forward
      default:
        return faRunning; // Default or other positions
    }
  };
  
  // The formatDate function adapted for TypeScript when input is a Date object
export const formatDate = (date: Date): string => {
  const validDate = (date instanceof Date) ? date : new Date(date);
  
  const day = validDate.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[validDate.getMonth()];
  const year = validDate.getFullYear();

  const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th'; // covers 4th to 20th
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  return `${day}${getOrdinalSuffix(day)} ${monthName}, ${year}`;
};
  