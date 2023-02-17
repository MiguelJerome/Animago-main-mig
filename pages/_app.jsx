import React, { useEffect } from 'react';
import { useRouter, Routes } from 'next/router'
import Layout from '../components/Layout';
import 'normalize.css/normalize.css'
import '@/styles/globals.css'
import dbLive from '../server/config/connexionNextGui.jsx';


export default function App({ Component, pageProps }) {
  
  console.log(dbLive ? "Database Mongoose is live" : 'Database Mongoose is down');
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/Accueil');
    }
  }, [router]);
  
  return (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  );
}