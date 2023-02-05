import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Categorie from '../components/Categorie';
import Footer from '../components/Footer';

export default function ToutMagasiner() {
    return <>
    <Categorie />
     <main>
      <h1>HTTP 302 | Found Tout Magasiner Page</h1>
      <h1>The web page is under construction</h1>
     </main>
     <Footer/>
    </>
  }