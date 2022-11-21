import "../../styles/globals.css";
import { Inter } from "@next/font/google";
import Nav from "./Nav";
import Heading from "./Heading";
import Filters from "./Filters";
const customFont = Inter();
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html className={customFont.className} lang="en">
      <body className="bg-[#F8F8F8]">
        <Nav />
        <Heading />
        <Filters />
        {children}
      </body>
    </html>
  );
}
