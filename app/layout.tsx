import { Lato } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { Metadata } from "next";
import { usePathname } from "next/navigation";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const router = usePathname();

  // const gameName = router?.split('/')[2];

  // let title= gameName ? getTitleFromGame(gameName) : 'LevelUp Lore';

  // document.title = title;

  return (
    <html lang="en">
      <SpeedInsights />
      <body className={lato.className}>
        {/* Layout UI */}
        {children}
      </body>
    </html>
  )
}

function getTitleFromGame(game: string): string {
  switch(game) {
    case 'fc24':
      return 'FC24 - LevelUp Lore';
    case 'leagueOfLegends':
      return 'League of Legends - LevelUp Lore';
    case 'valorant':
      return 'Valorant - LevelUp Lore';
    case 'rocketLeague':
      return 'Rocket League - LevelUp Lore';
    case 'counterStrike2':
      return 'Counter Strike 2 - LevelUp Lore';
    default:
      return 'LevelUp Lore';
  }
}