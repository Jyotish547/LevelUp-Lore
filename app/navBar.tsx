'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faStarHalfStroke, faArrowUpRightDots, faCrosshairs, faChessBoard, faMapLocationDot, faBullseye, faUsersGear, faFilm, faChevronRight, faChevronCircleRight, faChevronCircleLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { animate } from "framer-motion";

import { valorantLogo, cs2Logo, fc24Logo, lolLogo, rlLogo } from "./components/cardLayouts";
import dpIcon from '../public/assets/displayPicture.png';

// Animation Imports
import { navEndAnim, navEndItem, navItemAnim, navLinkAnim } from "./components/animations";

import { logos } from "./components/infoDesign";

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
        eafc: 'text-eafc border-eafc hover-eafc bg-eafc20 navImg-eafc',
        valo: 'text-valo border-valo hover-valo bg-valo30 navImg-valo',
    };

    // Determine the current color class based on the active navigation item
    const currentColorClass = colorClasses[currentNav[0]?.slug] || 'text-default border-default';

    // Split the classes for separate use
    const [textColorClass, borderColorClass, hoverClass, bgColorClass, navImg] = currentColorClass.split(' ');

    links = (
        <motion.div
            className="navLinks flex flex-col text-xl space-y-3 h-full w-full justify-start py-8"
            variants={navLinkAnim}
            initial="hidden"
            animate="visible"
        >
            {currentNav.map((nav, index) => (
                <motion.div id="" key={index}
                    className={`z-10 navItem flex items-center text-neutral-300 rounded-r-sm w-full cursor-pointer ${hoverClass} hover:font-semibold ${
                    active === nav.href ? `active-${nav.slug}` : "bg-white/5 border-l-2 border-white/10"
                    }`}
                    onClick={() => setActive(nav.href)}
                    variants={navItemAnim}
                    
                >
                    <Link href={nav.href} className="w-full p-3 h-full flex items-center">
                        <FontAwesomeIcon icon={nav.icon} className="text-2xl mr-3" />
                        <span className="w-full flex flex-row">
                            {nav.label}
                        </span>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )

    return(
        <nav
            id="navbar"
            className={`fixed top-1/2 transform -translate-y-1/2 nav-background shadow-lg shadow-teal-500/50 flex flex-col items-center px-8 py-10 justify-between h-full w-64 xl:w-72`}
            
        >
            <motion.div className="z-10 text-4xl font-semibold w-full text-center"
                initial={{ y: -100, opacity: 0}}
                animate={{ 
                    y: 0, 
                    opacity: 100, 
                    transition:{
                        type: "tween",
                        ease: "easeOut", 
                        duration: 0.6
                    } 
                }}
            >
                <Link href="/" className="w-full logo">
                    <Image src={logos.white} alt="LevelUp Lore" className="" />
                </Link>
            </motion.div>
            {links}
            {/* Dynamic Change based on game */}
            <motion.div
                className="z-10 flex flex-col items-center space-y-4 w-full"
                variants={navEndAnim}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className={`${hoverClass} navImg ${navImg} flex flex-row space-x-2 rounded-r-sm text-lg items-center justify-start space-x-4 w-full px-4 py-5 border-l-2 border-white/10 hover:${borderColorClass} bg-white/5 hover:${bgColorClass} transition-colors duration-300`}
                    variants={navEndItem}
                >
                    <Link href="/" className="flex flex-row w-full h-full items-center justify-between">
                        <FontAwesomeIcon icon={faChevronLeft} className={``} />
                        <Image src={currentNav[0]?.game || fc24Logo} alt="Game Logo" className="navGame" />
                    </Link>
                </motion.div>
                <motion.div className={`w-full hover:text-neutral-900`}
                    variants={navEndItem}
                >
                    <Link href="/"
                        className={` flex flex-row ${hoverClass} items-center rounded-r-sm ${textColorClass} justify-start space-x-4 w-full py-3 px-4 border-l-2 border-white/10 hover:text-neutral-900 hover:${borderColorClass} bg-white/5 hover:${bgColorClass} transition-colors duration-300`}
                    
                    >
                        <Image src={dpIcon} alt="" className="navDP" />
                        <div className="flex flex-col">
                            <span className={`text-lg font-semibold`}>Reggae547</span>
                            <span className="child text-sm">Aimbot</span>
                        </div>
                    </Link>
                </motion.div>
            </motion.div>
            
        </nav>
    );
};