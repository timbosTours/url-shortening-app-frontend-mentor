import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Banner from '@/components/Banner'
import MainContent from '@/components/MainContent'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Banner />
        <MainContent />
        <Footer />
      </main>
    </>
  )
}
