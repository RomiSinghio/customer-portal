import "../../styles/globals.css";
import { Inter } from "@next/font/google";
const customFont = Inter();
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html className="h-full bg-[#F8F8F8]" lang="en">
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
