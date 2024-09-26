import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Orebi_NextJs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
