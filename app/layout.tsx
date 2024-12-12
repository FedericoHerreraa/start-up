
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
