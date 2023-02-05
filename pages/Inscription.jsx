import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/Inscription.module.css'

import React, { useState } from 'react';
import { useRouter } from 'next/router'




//import { useMutation } from '@apollo/client';
//import Auth from '../utils/auth';
//import { ADD_USER } from '../utils/mutations';

export default function Inscription(props) {
    const router = useRouter()
    return <>
        <main>
        
            <div className={styles.container}>
                <div className={styles.promptWrapper}>
                    <button className={`${styles.button} ${styles.aInscription}`} onClick={() => router.push('/Accueil')}>← Aller a Accueil</button>
                </div>
                <div className={styles.promptWrapper}>
                    <button className={`${styles.button} ${styles.aInscription}`} onClick={() => router.push('/Connexion')}>← Aller a Connexion</button>
                </div>
                <form className={styles.formAuthentificationWrapper}>
                    <div className={styles.title}>
                        <h2>Inscription</h2>
                    </div>
                    <div className={styles.promptWrapper}>
                        <label className={styles.label}  htmlFor="firstName">Prenom:</label>
                        <input
                            placeholder="Prenom"
                            name="firstName"
                            type="firstName"
                            id="firstName"
                            className={styles.input} 
                        />
                    </div>
                    <div className={styles.promptWrapper}>
                        <label className={styles.label}  htmlFor="lastName">Nom:</label>
                        <input
                            placeholder="Nom"
                            name="lastName"
                            type="lastName"
                            id="lastName"
                            className={styles.input} 
                        />
                    </div>
                    <div className={styles.promptWrapper}>
                        <label className={styles.label}  htmlFor="email">Email:</label>
                        <input
                            placeholder="youremail@test.com"
                            name="email"
                            type="email"
                            id="email"
                            className={styles.input} 
                        />
                    </div>
                    <div className={styles.promptWrapper}>
                        <label className={styles.label}  htmlFor="pwd">Password:</label>
                        <input
                            placeholder="******"
                            name="password"
                            type="password"
                            id="pwd"
                            className={styles.input} 
                        />
                    </div>
                    <div className={styles.promptWrapper}>
                        <button type="reset" className={styles.btnAuthentification} >Reset</button>
                    </div>
                    <div className={styles.promptWrapper}>
                        <button type="submit" className={styles.btnAuthentification} >Inscription</button>
                    </div>
                </form>
            </div>
        </main>
    </>
  }