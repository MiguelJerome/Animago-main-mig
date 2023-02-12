import React from 'react';
import { Inter } from '@next/font/google'
import PanierPleinEcranContenu from '../../components/AchatPanier/PanierPleinEcran/PanierPleinEcranContenu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Cart.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function PanierPleinEcran() {
  return (
    <>
      <Header />
      <PanierPleinEcranContenu />
      <Footer />
    </>
  );
}
