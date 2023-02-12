import { Inter } from '@next/font/google'
import Header from '../components/Header';
import Footer from '../components/Footer';
export { default as PanierVideMessage } from '/components/AchatPanier/PanierVideMessage.jsx';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <main>
      </main>
      <Footer />
    </>
  );
}
