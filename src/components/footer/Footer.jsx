import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return <div className={styles.container}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="lill Blog" width={50} height={50}/>
        <h1 className={styles.logoText}>LiLLBlogs</h1>
      </div>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum ipsa doloremque quas provident possimus voluptates nam voluptate quam eos, laborum molestias? Harum accusantium delectus sed repellendus quod voluptatibus tenetur rerum sequi?
      </p>
      <div className={styles.icons}>
        <Image src="/instagram.png" alt="" width={18} height={18}/>
        <Image src="/linkedin.png" alt="" width={18} height={18}/>
        <Image src="/twitter.png" alt="" width={18} height={18}/>

      </div>
    </div>
    <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href="/">Home</Link>
        <Link href="/">Blog</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href="/">Coding</Link>
        <Link href="/">Fashion</Link>
        <Link href="/">Coding</Link>
        <Link href="/">Travel</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href="/">Instagram</Link>
        <Link href="/">{"Twitter(X)"}</Link>
        <Link href="/">Linkedin</Link>
      </div>
    </div>



  </div>;
};

export default Footer;
