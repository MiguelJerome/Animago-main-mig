import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart1() {
    return <>
      <Header/>
      <Cart/>
        <main>
          <h1>HTTP 302 | Found Cart Page</h1>
          <h1>The web page is under construction</h1>
        </main>
      <Footer/>
    </>
  }