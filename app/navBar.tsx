'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faUpRightFromSquare, faRankingStar, faStarHalfStroke, faLayerGroup, faChessBoard, faFutbol, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { valorantLogo, cs2Logo, fc24Logo, lolLogo, rlLogo } from "./cardLayouts";
import dpIcon from '../public/assets/displayPicture.png';

const eafc24Nav = [
    {icon: faPeopleGroup, label: "Formations", href: "#"},
    {icon: faRankingStar, label: "Top Cards", href: "#"},
    {icon: faStarHalfStroke, label: "Skill Moves", href: "#"},
    {icon: faLayerGroup, label: "Team Build", href: "#"},
    {icon: faChessBoard, label: "Match Tactics", href: "#"},
    {icon: faFutbol, label: "Ultimate Team", href: "#"},
    {icon: faBriefcase, label: "Career Mode", href: "#"},
]

export default function NavBar() {
    const router = useRouter();
    const currentPage = "eafc24"
    let links;

    if(currentPage.includes('eafc24')) {
        links = (
            <div className="flex flex-col text-2xl space-y-4">
                {eafc24Nav.map((nav, index) => (
                    <Link key={index} href={nav.href} className="py-2 px-4 navItem">
                         <span className="text-white"><FontAwesomeIcon icon={nav.icon} className="mr-2" />{nav.label}</span>
                    </Link>
                ))}
            </div>
        )
    }

    return(
        <nav id="navbar" className="bg-black bg-opacity-80 rounded-xl shadow-md shadow-green-300/30 flex flex-col items-center p-8 space-y-8">
            <div className="text-4xl font-semibold">
                LevelUp Lore
            </div>
            {links}
            {/* Dynamic Change based on game */}
            <div className="flex flex-col items-center space-y-4">
                <span className="text-xl font-semibold text-green-500">Change Game</span>
                <Link href="" className="py-4 px-5 bg-black rounded-lg shadow-md shadow-green-300/30">
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