import React, {useState} from 'react'
import DropDownMenu from '../DropdownMenu/DropdownMenu'
import styles from './Navbar.module.scss'


function HamburgerIcon() {
    const [dropMenuOpen, setDropMenuOpen] = useState(false)

    function handleClick() {
        setDropMenuOpen(dropMenuOpen => !dropMenuOpen)
    }
    return (
        <>
        <div className={styles.IconWrapper}  onClick={handleClick}>
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 20 20'><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="FFF" fillRule="evenodd" /></svg>
                </div>
            {dropMenuOpen && <DropDownMenu />}
        </>
    )
}

export default HamburgerIcon