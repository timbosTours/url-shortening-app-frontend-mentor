import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.scss'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ subsets: ['latin-ext'], weight: ["500", "700"] })

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/"><h1 className={poppins.className}>Shortly</h1></Link>
            <ul>
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Resources</Link>
                <Link href="/">Login</Link>
                <Link href="/">Sign Up</Link>
            </ul>
        </nav>
    )
}

export default Navbar