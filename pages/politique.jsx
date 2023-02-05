import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Politque() {
    return <>
      <Header/>
        <main>
          <h1>HTTP 302 | Found Politique Page</h1>
          <h1>The web page is under construction</h1>
        </main>
      <Footer/>
    </>
  }