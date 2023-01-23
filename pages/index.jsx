import { Inter } from '@next/font/google'
import Header from '../components/Header.jsx'
import Menu from '../components/Menu.jsx'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <Header />
    <Menu />
    <main>
    </main>

  </>
}