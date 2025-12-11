import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                            
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}></div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
