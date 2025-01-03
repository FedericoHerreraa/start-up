
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
        <link rel="icon" href="https://framerusercontent.com/images/sHciS4qwmcUtBxlzJXwHGPxKgg.jpg"/>
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
