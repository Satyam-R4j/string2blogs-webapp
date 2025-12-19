import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Providers from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "string2blogs",
    description: "The best blog app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <ThemeContextProvider>
                        <ThemeProvider>
                            <div className="container">
                                <div className="wrapper ">
                                    <Navbar />
                                    {children}
                                    <Footer />
                                </div>
                            </div>
                        </ThemeProvider>
                    </ThemeContextProvider>
                </Providers>
            </body>
        </html>
    );
}
