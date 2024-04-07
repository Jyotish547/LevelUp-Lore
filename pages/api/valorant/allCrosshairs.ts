import type { NextApiRequest, NextApiResponse } from "next";

import dpIcon from '/public/assets/displayPicture.png';

import imm2 from '/public/assets/valorant/ranks/imm2.png'

import ch1 from '/public/assets/valorant/crosshairs/1.png';
import ch2 from '/public/assets/valorant/crosshairs/2.png';
import ch3 from '/public/assets/valorant/crosshairs/3.png';
import ch4 from '/public/assets/valorant/crosshairs/4.png';
import ch5 from '/public/assets/valorant/crosshairs/5.png';
import ch6 from '/public/assets/valorant/crosshairs/6.png';

import { CrosshairData } from "@/components/app/components/types/valorantType";

export default function crosshairAPI (req: NextApiRequest, res: NextApiResponse) {
    const crosshairs: CrosshairData = [
        {
            key: 1,
            username: "noczut#galaxy",
            displayIcon: dpIcon,
            title: "Sacy's Crosshair",
            rank: imm2,
            crosshair: ch1,
            code: "0;P;h;0;m;1;0t;1;0l;4;0o;1;0a;1;0f;0;1t;3;1o;2;1a;1;1m;0;1f;0"
        },
        {
            key: 2,
            username: "Duhaxe#GODs",
            displayIcon: dpIcon,
            title: "Aimbot Crosshair",
            rank: imm2,
            crosshair: ch2,
            code: "0;P;c;8;b;1;t;1;o;0;z;2;a;1;0t;5;0l;2;0v;2;0o;2;0a;1;0s;1;0e;1;1t;2;1l;2;1v;2;1o;10;1a;0.35;1s;1;1e;1;u;FFFFFF;d;0;h;0;0g;0;1g;0;0f;0;1f;1;0m;0;1m;1;0b;1;1b;0;m;0"
        },
        {
            key: 3,
            username: "Veenmo#venom",
            displayIcon: dpIcon,
            title: "Lovely Crosshair",
            rank: imm2,
            crosshair: ch3,
            code: "0;P;c;8;b;1;t;1;o;0.5;z;2;a;1;0t;8;0l;1;0v;1;0o;1;0a;1;0s;1;0e;1;1t;10;1l;1;1v;1;1o;2;1a;0.6;1s;1;1e;1;u;FF67CDFF;d;1;h;0;0g;0;1g;0;0f;0;1f;0;0m;0;1m;0;0b;1;1b;1;m;0"
        },
        {
            key: 4,
            username: "Lagshöt#idcc",
            displayIcon: dpIcon,
            title: "1-3-2-3 Crosshair",
            rank: imm2,
            crosshair: ch4,
            code: "0;P;c;8;b;1;t;1;o;0.5;z;2;a;1;0t;2;0l;3;0v;3;0o;3;0a;1;0s;1;0e;1;1t;2;1l;2;1v;2;1o;10;1a;0.35;1s;1;1e;1;u;D0021BFF;d;0;h;0;0g;0;1g;0;0f;0;1f;1;0m;0;1m;1;0b;1;1b;0;m;0"
        },
        {
            key: 5,
            username: "Slims Banana#0000",
            displayIcon: dpIcon,
            title: "X Crosshair",
            rank: imm2,
            crosshair: ch5,
            code: "0;P;c;8;b;1;t;1;o;0.5;z;2;a;1;0t;1;0l;6;0v;6;0o;2;0a;1;0s;1;0e;1;1t;3;1l;2;1v;2;1o;3;1a;1;1s;1;1e;1;u;00C6C1FF;d;0;h;0;0g;0;1g;0;0f;0;1f;0;0m;0;1m;0;0b;1;1b;1;m;0"
        },
        {
            key: 6,
            username: "Brandon#2468",
            displayIcon: dpIcon,
            title: "Fthfth Crosshair",
            rank: imm2,
            crosshair: ch6,
            code: "0;P;c;8;b;1;t;6;o;1;z;6;a;1;0t;10;0l;20;0v;20;0o;20;0a;1;0s;3;0e;3;1t;3;1l;10;1v;10;1o;40;1a;1;1s;3;1e;3;u;C24000;d;1;h;1;0g;1;1g;0;0f;1;1f;1;0m;1;1m;1;0b;1;1b;1;m;1"
        },
    ]

    res.status(200).json(crosshairs);
}