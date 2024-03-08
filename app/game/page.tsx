'use client'

import GamePageLayout from "./layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Formations from "./fc24/formations/page";



export default function EAFC24() {

    // const response = await fetch(`/api/getAllFormationsData`);
    return(
        <Formations />
    )
}