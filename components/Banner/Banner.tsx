import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Banner.module.scss'
import BannerImage from './Banner-bg-img'
import Link from 'next/link'


function Banner() {

    return (
        <div className={styles.banner}>
            <Navbar />
            <BannerImage />
            <h2  tabIndex={0}>More than just <br /> shorter links</h2>
            <p tabIndex={0}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Link href={"/"} className={styles.getStarted}>Get Started</Link>
        </div>
    )
}

export default Banner