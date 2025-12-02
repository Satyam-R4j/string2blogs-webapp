import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "string2blogs",
    description: "The best blog app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="container">
                    <div className="wrapper ">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
