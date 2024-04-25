'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faStarHalfStroke, faArrowUpRightDots, faCrosshairs, faChessBoard, faMapLocationDot, faBullseye, faUsersGear, faFilm, faChevronRight, faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { valorantLogo, cs2Logo, fc24Logo, lolLogo, rlLogo } from "./components/cardLayouts";
import dpIcon from '../public/assets/displayPicture.png';

const eafc24Nav = [
    {icon: faChessBoard, label: "Team Tactics", href: "/game/fc24/formations", slug: 'eafc', game: fc24Logo},
    {icon: faRankingStar, label: "Top Players", href: "/game/fc24/topCards", slug: 'eafc'},
    {icon: faStarHalfStroke, label: "Skill Moves", href: "/game/fc24/skillMoves", slug: 'eafc'},
    {icon: faFilm, label: "Highlights", href: "/game/fc24/highlights", slug: 'eafc'},
    {icon: faArrowUpRightDots, label: "Guides", href: "/game/fc24/guides", slug: 'eafc'},
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
    let links;

    const [active, setActive] = useState('');

    const pathname = usePathname() || '';

    const isEafc24 = pathname.includes('fc24');
    const isValorant = pathname.includes('valorant');

    const currentNav = useMemo(() => {
        if (isEafc24) {
          return eafc24Nav;
        } else if (isValorant) {
          return valoNav;
        } else {
          return [];
        }
      }, [isEafc24, isValorant]);

    useEffect(() => {
        // Find the nav item that matches the currentPage
        const currentNavItem = currentNav.find(nav => pathname.includes(nav.href));
        
        setActive(currentNavItem ? currentNavItem.href : currentNav[0]?.href);
        // console.log(currentNav[0])
      }, [pathname, currentNav]);

    
    const colorClasses: ColorClasses = {
        eafc: 'text-eafc border-eafc shadow-green-300/30 bg-eafc20',
        valo: 'text-valo border-valo shadow-violet-400/40 bg-valo20',
    };

    // Determine the current color class based on the active navigation item
    const currentColorClass = colorClasses[currentNav[0]?.slug] || 'text-default border-default';

    // Split the classes for separate use
    const [textColorClass, borderColorClass, shadowColorClass, bgColorClass] = currentColorClass.split(' ');

    links = (
        <div className="flex flex-col text-xl space-y-3 h-full w-full justify-start py-8">
            {currentNav.map((nav, index) => (
                <Link key={index} href={nav.href}
                    className={`p-3 navItem ${
                    active === nav.href ? `active-${nav.slug}` : ""
                    }`}
                    onClick={() => setActive(nav.href)}
                >
                        <span className="text-neutral-300"><FontAwesomeIcon icon={nav.icon} className="mr-2" />{nav.label}</span>
                </Link>
            ))}
        </div>
    )

    return(
        <nav id="navbar" className={`fixed top-1/2 transform -translate-y-1/2 bg-neutral-950/80 shadow-lg ${shadowColorClass} flex flex-col items-center px-8 py-10 justify-between h-full w-72`}>
            <div className="text-4xl font-semibold w-full text-center">
                LevelUp Lore
            </div>
            {links}
            {/* Dynamic Change based on game */}
            <div className="flex flex-col items-center space-y-4 w-full">
                <Link href="/" className={`flex flex-row space-x-2 text-lg items-center justify-between w-full px-4 py-5 border-l-2 ${borderColorClass} ${bgColorClass}`}>
                        <FontAwesomeIcon icon={faChevronCircleLeft} className={``} />
                        <Image src={currentNav[0]?.game || fc24Logo} alt="Game Logo" width={160} />
                    </Link>
                <div className="w-full">
                    <Link href="" className={`flex flex-row items-center justify-start space-x-4 w-full py-3 px-4 border-l-2 ${borderColorClass} ${bgColorClass}`}>
                        <Image src={dpIcon} alt="" width="48" />
                        <div className="flex flex-col">
                            <span className={`text-lg font-semibold ${textColorClass}`}>Reggae547</span>
                            <span className="text-sm font-light">Aimbot</span>
                        </div>
                    </Link>
                </div>
            </div>
            
        </nav>
    );
};