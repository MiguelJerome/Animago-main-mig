import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import Head from 'next/head';
import ImagePrincipal from '../public/img/image_accueil.png';
import facebook from '../public/img/facebook.svg';
import instagram from '../public/img/instagram.svg';
import youtube from '../public/img/youtube.svg';
import search from '../public/img/search.png';
import Login from '../public/img/login.png';
import Cart from '../public/img/cart.png';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/Accueil');
    }
  }, [router]);
  const title = `Animago`;

  const [visibleState, setVisible] = useState();

  const toggler = () => {
      setVisible(!visibleState);
  }
  return (
    <>
      <Head>
      <meta name="description" content={`Après plusieurs heures de recherche pour trouver un manque service au niveau de la communauté, nous avons vu que le marché des articles pour animaux, en particulier les livraisons, sont très peu disponible. L'équipe AnimaGo! est ravi de montrer leur vision de l'un des meilleurs futurs sites Web d'animaliers sur le marché, qui sera bientot présenté au monde.`}/>
      <title>{title}</title>
        <link rel="preload" href={ImagePrincipal} as="image" />
        <link rel="preload" href={facebook} as="image" />
        <link rel="preload" href={instagram} as="image" />
        <link rel="preload" href={youtube} as="image" />
        <link rel="preload" href={search} as="image" />
        <link rel="preload" href={Login} as="image" />
        <link rel="preload" href={Cart} as="image" />
      </Head>
      <Layout>
        <Component {...pageProps} toggler={toggler} />
      </Layout>
    </>
  );
}
