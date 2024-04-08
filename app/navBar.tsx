'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faUpRightFromSquare, faRankingStar, faStarHalfStroke, faLayerGroup, faArrowUpRightDots, faCrosshairs, faChessBoard, faMapLocationDot, faFutbol, faBriefcase, faBullseye, faUsersGear } from "@fortawesome/free-solid-svg-icons";

import { valorantLogo, cs2Logo, fc24Logo, lolLogo, rlLogo } from "./components/cardLayouts";
import dpIcon from '../public/assets/displayPicture.png';

const eafc24Nav = [
    {icon: faChessBoard, label: "Team Tactics", href: "/game/fc24/formations", slug: 'eafc', game: fc24Logo},
    {icon: faRankingStar, label: "Top Players", href: "/game/fc24/topCards", slug: 'eafc'},
    {icon: faStarHalfStroke, label: "Skill Moves", href: "/game/fc24/skillMoves", slug: 'eafc'},
    {icon: faFutbol, label: "Ultimate Team", href: "/game/fc24/fut", slug: 'eafc'},
    {icon: faBriefcase, label: "Career Mode", href: "/game/fc24/career", slug: 'eafc'},
]

const valoNav = [
    {icon: faBullseye, label: "Lineups", href: "/game/valorant/lineups", slug: 'valo', game: valorantLogo},
    {icon: faUsersGear, label: "Agents", href: "/game/valorant/agents", slug: 'valo'},
    {icon: faMapLocationDot, label: "Maps", href: "/game/valorant/maps", slug: 'valo'},
    {icon: faCrosshairs, label: "Crosshairs", href: "/game/valorant/crosshairs", slug: 'valo'},
    {icon: faArrowUpRightDots, label: "Guides", href: "/game/valorant/guides", slug: 'valo'}
];

interface ColorClasses {
    [key: string]: string; // This is the index signature
}

export default function NavBar() {
    const router = useRouter();
    const currentPage = "eafc24"
    let links;

    const [active, setActive] = useState('');

    const pathname = usePathname() || '';

    const isEafc24 = pathname.includes('fc24');
    const isValorant = pathname.includes('valorant');

    const currentNav = isEafc24 ? eafc24Nav : isValorant ? valoNav : [];

    useEffect(() => {
        // Find the nav item that matches the currentPage
        const currentNavItem = currentNav.find(nav => currentPage.includes(nav.href));
        
        setActive(currentNavItem ? currentNavItem.href : currentNav[0]?.href);
        // console.log(currentNav[0])
      }, [pathname, currentPage]);

    
    const colorClasses: ColorClasses = {
        eafc: 'text-eafc border-eafc',
        valo: 'text-valo border-valo',
    };

    // Determine the current color class based on the active navigation item
    const currentColorClass = colorClasses[currentNav[0]?.slug] || 'text-default border-default';

    // Split the classes for separate use
    const [textColorClass, borderColorClass] = currentColorClass.split(' ');

    if(currentPage) {
        links = (
            <div className="flex flex-col text-2xl space-y-4">
                {currentNav.map((nav, index) => (
                    <Link key={index} href={nav.href}
                        className={`py-2 px-4 navItem ${
                        active === nav.href ? `active-${nav.slug}` : ""
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
        <nav id="navbar" className="fixed left-16 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 rounded-xl shadow-md shadow-green-300/30 flex flex-col items-center p-8 space-y-8 h-[792]">
            <div className="text-4xl font-semibold">
                LevelUp Lore
            </div>
            {links}
            {/* Dynamic Change based on game */}
            <div className="flex flex-col items-center space-y-4">
                <span className={`text-xl font-semibold ${textColorClass}`}>Change Game</span>
                <Link href="/" className="py-4 px-5 bg-black rounded-lg shadow-md shadow-green-300/30">
                    <Image src={currentNav[0]?.game || fc24Logo} alt="Game Logo" width="150" />
                </Link>
            </div>
            <Link href="" className={`flex flex-row items-center justify-center space-x-4 w-full border-2 p-3 rounded-lg ${borderColorClass}`}>
                <Image src={dpIcon} alt="" width="48" />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">Reggae547</span>
                    <span className="text-sm font-light">Aimbot</span>
                </div>
            </Link>
        </nav>
    );
};