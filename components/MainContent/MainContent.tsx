import React, { useRef, forwardRef } from 'react'
import MyForm from '../MyForm/MyForm'
import BlueLine from './BlueLine'
import BrandRecIcon from './BrandRecIcon'
import DetailedRecordsIcon from './DetailedRecordsIcon'
import FullyCustomIcon from './FullyCustomIcon'
import styles from './MainContent.module.scss'
// import { MyFormProps } from '../MyForm/MyForm'


// const MyFormWithRef = forwardRef<HTMLInputElement, MyFormProps>((props, ref) => (
//   <MyForm {...props} inputRef={ref}/>
// ));

function MainContent() {
  // const formRef = useRef<HTMLInputElement>(null);

  // const focusInput = () => {
  //   formRef.current?.focus();
  // };
  
  return (

    <div className={styles.mainContent}>
      {/* <MyFormWithRef inputRef={formRef} /> */}
      <MyForm/>
      <div className={styles.advancedStatistics} tabIndex={-1}>
      <h2 tabIndex={0}>Advanced Statistics</h2>
        <p className={styles.textWrapper} tabIndex={0}>Track how your links are performing accross the web with our advanced statistics dashbaord.</p>
      </div>
      <div className={styles.mainContentWrapper}>
        <div className={`${styles.mainTextContent} ${styles.brandRecognition} `}>

            <BrandRecIcon />

          <h3 tabIndex={0}>Brand Recognition</h3>
          <p tabIndex={0}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </div>
          <BlueLine/>
        <div className={`${styles.mainTextContent} ${styles.detailedRecords} `}>

            <DetailedRecordsIcon />

          <h3 tabIndex={0}>Detailed Records</h3>
          <p tabIndex={0}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className={`${styles.mainTextContent} ${styles.fullyCustom} `}>

            <FullyCustomIcon />

          <h3 tabIndex={0}>Fully Customizable</h3>
          <p tabIndex={0}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
      <div className={styles.boostLinks}>
        <h2 tabIndex={0}>Boost your links today</h2>
        <button className={styles.getStarted}>Get Started</button>
      </div>
    </div>
  )
}

export default MainContent