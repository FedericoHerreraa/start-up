
import "./globals.css";
import { LenguageProvider } from "./context/LenguageContext";
import { NightModeProvider } from "./context/NightModeContext";
import { MobileViewProvider } from "./context/MobileViewContext";

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
