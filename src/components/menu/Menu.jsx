import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"what's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.coding}`}>
                            Coding
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span
                            className={`${styles.category} ${styles.culture}`}
                        >
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
            </div>

            <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
            <h1 className={styles.title}>Editor Pick</h1>
            <h2 className={styles.subtitle}>{"Chosen by editor"}</h2>
            <h1 className={styles.title}>Editor Pick</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.coding}`}>
                            Coding
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span
                            className={`${styles.category} ${styles.culture}`}
                        >
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Vicky - </span>
                            <span className={styles.date}>06.12.2025</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
