import { Inter } from '@next/font/google'
import Header from '../components/Header';
import Footer from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })
export { default as PanierVideMessage } from './PanierVideMessage';


export default function Home() {
  return <>
    <Header/>
      <main>
      </main>
    <Footer/>
  </>
}