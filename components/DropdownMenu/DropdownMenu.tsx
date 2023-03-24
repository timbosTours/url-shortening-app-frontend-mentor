import React from 'react'
import Link from 'next/link'
import styles from './DropdownMenu.module.scss'

function DropDownMenu() {
    return (
        <div className={styles.dropdownMenu}>
            <nav >
            <ul className={styles.dropDownLinks}>
                <li><Link href="/">Features</Link></li>
                <li><Link href="/">Pricing</Link></li>
                    <li className={styles.resources}><Link href="/">Resources</Link></li>
                <li><Link href="/">Login</Link></li>
                <span><li className={styles.signUpButton}><Link href="/">Sign Up</Link></li></span>
                </ul>
            </nav>
        </div>
    )
}

export default DropDownMenu