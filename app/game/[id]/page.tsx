import GamePageLayout from "../layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


export default async function EAFC24( {params} : {params : {id : string}}) {
    console.log(params.id);
    let formationName = params.id;
    
    const response = await fetch(`http://localhost:3000/api/formationDetailsByID/${params.id}`);
    
 //const parsedInfo = JSON.parse(response)
console.log(response)
    return(
       
     <><h1 className="text-center">Hello this is the information for my Formation {formationName}</h1></>
    )
}