import Link from 'next/link'
import React from 'react'
import MyForm from '../MyForm/MyForm'
import styles from './maincontent.module.scss'

function MainContent() {
  return (
    <div className={styles.maincontent}>
      <MyForm/>
      <div  tabIndex={-1}>
      <h2 tabIndex={0}>Advanced Statistics</h2>
        <p tabIndex={0}>Track how your links are performing accross the web with our advanced statistics dashbaord.</p>
      </div>
      <div>
        <span>
          <h3 tabIndex={0}>Brand Recognition</h3>
          <p tabIndex={0}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </span>
        <span>
          <h3 tabIndex={0}>Detailed Records</h3>
          <p tabIndex={0}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </span>
        <span>
          <h3 tabIndex={0}>Fully Customizable</h3>
          <p tabIndex={0}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </span>
      </div>
      <div>
        <h2 tabIndex={0}>Boost your links today</h2>
        <Link href="/">Get Started</Link>
      </div>
    </div>
  )
}

export default MainContent