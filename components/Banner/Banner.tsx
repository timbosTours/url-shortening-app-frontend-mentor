import MyForm from '../MyForm/MyForm'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Link from 'next/link'
import styles from './Banner.module.scss'
import BannerImage from './Banner-bg-img'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ subsets: ['latin-ext'], weight: ["500", "700"] })

function Banner() {
    return (
        <div className={styles.banner}>
            <Navbar />
            <BannerImage />
            <h2 className={poppins.className} tabIndex={0}>More than just <br /> shorter links</h2>
            <p tabIndex={0}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Link href="/" className={styles.getStarted}>Get Started</Link>
            <MyForm />
        </div>
    )
}

export default Banner