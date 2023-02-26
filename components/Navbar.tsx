import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav >
            <Link href="/"><h1>Shortly</h1></Link>
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