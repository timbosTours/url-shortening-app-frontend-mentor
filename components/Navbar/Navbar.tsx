import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.scss'
import HamburgerIcon from './HamburgerIcon'

function Navbar() {
    

    return (
        <>
        <nav className={styles.navbar}>
            <Link href="/"><h1>Shortly</h1></Link>
            <HamburgerIcon/>
            <ul className={styles.mainNavLinks}>
                <li><Link href="/">Features</Link></li>
                <li><Link href="/">Pricing</Link></li>
                <li><Link href="/">Resources</Link></li>
                <li><Link href="/">Login</Link></li>
                <li><Link href="/">Sign Up</Link></li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar