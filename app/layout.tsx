
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
        <link rel="icon" href="https://res.cloudinary.com/dikdtnj2b/image/upload/v1736027957/logo_qxphk1.png"/>
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
