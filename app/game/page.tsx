'use client'

import GamePageLayout from "./layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Formations from "../../eafc24/formations";



export default function EAFC24() {

    // const response = await fetch(`/api/getAllFormationsData`);
    return(
        <Formations />
    )
}