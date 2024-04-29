import { Lato } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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