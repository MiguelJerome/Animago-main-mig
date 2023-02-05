import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Categorie from '../components/Categorie';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Chat() {
    return <>
      <Header/>
      <Categorie />
        <main>
          <h1>HTTP 302 | Found Chat Page</h1>
          <h1>The web page is under construction</h1>
        </main>
      <Footer/>
    </>
  }