import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faSoccerBall, faRunning, faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


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