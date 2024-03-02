'use client'

import GamePageLayout from "./layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Formations from "./eafc24/formations";

interface FormationsProps {
    onPageChange: (pageName: string) => void; // Adjust the type according to the actual implementation
  }

export default function EAFC24({ onPageChange }: FormationsProps) {
    return(
        <Formations onPageChange={() => onPageChange('formationPage')} />
    )
}