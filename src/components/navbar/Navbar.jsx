import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import AuthLinks from "@/components/authLinks/AuthLinks";

const navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image
                    src="/instagram.png"
                    alt="instagram"
                    width={24}
                    height={24}
                />
                <Image
                    src="/linkedin.png"
                    alt="linkedin"
                    width={24}
                    height={24}
                />
                <Image src="/github.png" alt="github" width={24} height={24} />
                <Image
                    src="/twitter.png"
                    alt="twitter"
                    width={24}
                    height={24}
                />
            </div>
            <div className={styles.logo}>string2blogs</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">About</Link>
                <AuthLinks />
            </div>
        </div>
    );
};

export default navbar;
