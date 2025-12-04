import React from "react";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {" "}
                <b>Lorem ipsum dolor</b> sit amet consectetur adipisicing.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Culpa, dicta.
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Provident eligendi nesciunt suscipit optio, eum
                        enim temporibus exercitationem nemo eius tempora!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
