import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";





const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Official Printer Support",
};

export default function RootLayout({ children }) {
  useEffect(() => {
  console.log("LiveChat mounted", window);
}, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    
        {children}
      
      
      </body>
    </html>
  );
}
