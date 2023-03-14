import MyForm from '../MyForm/MyForm'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Link from 'next/link'
import styles from './Banner.module.scss'

function Banner() {
    return (
        <div className={styles.banner}>
            <Navbar />
            <h2  tabIndex={0}>More than just shorter links</h2>
            <p tabIndex={0}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Link href="/">Get Started</Link>
            <MyForm />
        </div>
    )
}

export default Banner