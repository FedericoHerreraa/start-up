
import "./globals.css";
import { LenguageProvider } from "./context/LenguageContext";
import { NightModeProvider } from "./context/NightModeContext";

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
            {children}
          </NightModeProvider>
        </LenguageProvider>
      </body>
    </html>
  );
}
