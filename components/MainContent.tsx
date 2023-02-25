import Link from 'next/link'
import React from 'react'

function MainContent() {
  return (
    <>
      <div>
      <h2>Advanced Statistics</h2>
        <p>Track how your links are performing accross the web with our advanced statistics dashbaord.</p>
      </div>
      <div>
        <span>
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        </span>
        <span>
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </span>
        <span>
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </span>
      </div>
      <div>
        <h2>Boost your links today</h2>
        <Link href="/">Get Started</Link>
      </div>
    </>
  )
}

export default MainContent