import "./globals.css";
import NavBar from "./navbar";
import { Archivo_Black,Bokor,Roboto_Condensed,Poppins } from "next/font/google";
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--roboto-condensed',
});
const bokor = Bokor({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--bokor',
});
const rubikDoodleShadow = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--rubik-doodle-shadow',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--poppins',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${bokor.variable} ${rubikDoodleShadow.variable} ${poppins.variable} font-sans bg-primary text-muted-foreground`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
