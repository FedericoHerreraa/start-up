
import "./globals.css";
import { LenguageProvider } from "@/app/context/LenguageContext";
import { NightModeProvider } from "@/app/context/NightModeContext";
import { MobileViewProvider } from "@/app/context/MobileViewContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dikdtnj2b/image/upload/v1736784215/logo-light_tk9ppw.png"/>
      </head>
      <body>
        <LenguageProvider>
          <NightModeProvider>
            <MobileViewProvider>
              {children}
            </MobileViewProvider>
          </NightModeProvider>
        </LenguageProvider>
      </body>
    </html>
  );
}
