import "./globals.css";
import NavBar from "./navbar";
import { Rubik_Doodle_Shadow,Bokor,Roboto_Condensed } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";
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
const rubikDoodleShadow = Rubik_Doodle_Shadow({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--rubik-doodle-shadow',
});
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--luckiest-guy',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${bokor.variable} ${rubikDoodleShadow.variable} ${luckiestGuy.variable} font-sans bg-primary text-muted-foreground`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
