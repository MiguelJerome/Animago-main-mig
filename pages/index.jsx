import { Inter } from '@next/font/google'
import Header from '../components/Header';
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <Header/>
      <main>
        <h1>HTTP 302 | Found Root Page</h1>
        <h1>The web page is under construction</h1>
      </main>
    <Footer/>
  </>
}