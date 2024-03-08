'use client'
import { useRouter } from "next/navigation";
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faUpRightFromSquare, faRankingStar, faStarHalfStroke, faLayerGroup, faChessBoard, faFutbol, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { valorantLogo, cs2Logo, fc24Logo, lolLogo, rlLogo } from "./components/cardLayouts";
import dpIcon from '../public/assets/displayPicture.png';

const eafc24Nav = [
    {icon: faPeopleGroup, label: "Formations", href: "/game/fc24/formations"},
    {icon: faRankingStar, label: "Top Cards", href: "/game/fc24/topCards"},
    {icon: faStarHalfStroke, label: "Skill Moves", href: "/game/fc24/skillMoves"},
    {icon: faLayerGroup, label: "Team Build", href: "/game/fc24/teamBuild"},
    {icon: faChessBoard, label: "Match Tactics", href: "/game/fc24/tactics"},
    {icon: faFutbol, label: "Ultimate Team", href: "/game/fc24/fut"},
    {icon: faBriefcase, label: "Career Mode", href: "/game/fc24/career"},
]

export default function NavBar() {
    const router = useRouter();
    const currentPage = "eafc24"
    let links;

    const [active, setActive] = useState(eafc24Nav[0].href);

    if(currentPage.includes('eafc24')) {
        links = (
            <div className="flex flex-col text-2xl space-y-4">
                {eafc24Nav.map((nav, index) => (
                    <Link key={index} href={nav.href}
                        className={`py-2 px-4 navItem ${
                        active === nav.href ? "active" : ""
                      }`}
                      onClick={() => setActive(nav.href)}
                    >
                         <span className="text-white"><FontAwesomeIcon icon={nav.icon} className="mr-2" />{nav.label}</span>
                    </Link>
                ))}
            </div>
        )
    }

    return(
        <nav id="navbar" className="fixed bg-black bg-opacity-80 rounded-xl shadow-md shadow-green-300/30 flex flex-col items-center p-8 space-y-8">
            <div className="text-4xl font-semibold">
                LevelUp Lore
            </div>
            {links}
            {/* Dynamic Change based on game */}
            <div className="flex flex-col items-center space-y-4">
                <span className="text-xl font-semibold text-green-500">Change Game</span>
                <Link href="/" className="py-4 px-5 bg-black rounded-lg shadow-md shadow-green-300/30">
                    <Image src={fc24Logo} alt="Game Logo" width="150" />
                </Link>
            </div>
            <Link href="" className="flex flex-row items-center justify-between w-full border-2 border-green-500 p-3 rounded-lg">
                <Image src={dpIcon} alt="" width="48" />
                <div className="flex flex-col">
                    <span className="text-lg">Reggae547</span>
                    <span className="text-sm font-light">Aimbot</span>
                </div>
                <FontAwesomeIcon icon={faUpRightFromSquare} className="p-2 bg-green-500 rounded-md text-black text-sm" />
            </Link>
        </nav>
    );
};