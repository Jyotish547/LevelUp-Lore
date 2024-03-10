import Link from "next/link";
import Image from "next/image";

import { PlayersData } from "@/components/app/components/types/fc24Type";

export default async function PlayerDetails( {params} : {params : {id: string}} ) {
    console.log(params.id);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/playerDetailsByID/${params.id}`)
    const playerArray = await response.json();
    const player = playerArray[0];
    console.log(player);
    

    return(
        <div>
            This is the Player Detail Page for {player.firstName} {player.lastName}
        </div>
    )
}