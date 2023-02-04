import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Categorie from '../components/Categorie';

export default function Reptile() {
    return <>
    <Categorie />
     <main>
      <h1>HTTP 302 | Found Reptile Page</h1>
      <h1>The web page is under construction</h1>
     </main>
    </>
  }