import { useRouter, Routes } from 'next/router'
import Layout from '../components/Layout';
import 'normalize.css/normalize.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
