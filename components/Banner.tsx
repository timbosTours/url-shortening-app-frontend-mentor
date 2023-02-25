import MyForm from './MyForm'

import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

function Banner() {
    return (
        <>
            <Navbar />
            <h2 tabIndex={0}>More than just shorter links</h2>
            <p tabIndex={0}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Link href="/">Get Started</Link>
            <MyForm />
        </>
    )
}

export default Banner