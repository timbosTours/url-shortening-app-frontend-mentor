import React from 'react'
import Link from 'next/link'
import styles from './DropdownMenu.module.scss'

function DropDownMenu() {
    return (
        <div className={styles.dropdownMenu}>
            <h3>hello</h3>
            <nav >
            <ul>
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Resources</Link>
                <Link href="/">Login</Link>
                <Link href="/">Sign Up</Link>
                </ul>
            </nav>
        </div>
    )
}

export default DropDownMenu