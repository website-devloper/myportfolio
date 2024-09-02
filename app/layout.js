import { Inter } from '@next/font/google';
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MenhTech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/assets/font-awesome-lib/icon/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap-lib/bootstrap.min.css" />
      </head>
      <body className="first_nav_hero_about">
        <Navbar/>
        {children}
        <script src="/assets/js/aos.js"></script>
        <script src="https://kit.fontawesome.com/48adce65bb.js" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}