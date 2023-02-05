import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/Connexion.module.css'

import { useRouter } from 'next/router'

import React, { useState } from 'react';
//import { useMutation } from '@apollo/client';
//import Auth from '../utils/auth';
//import { ADD_USER } from '../utils/mutations';

export default function Connexion(props) {
    const router = useRouter()
    const [formState, setFormState] = useState({ email: '', password: '' });
 // const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return <>
     <main>
        <div className={styles.container}>
                <div className={styles.promptWrapper}>
                    <button className={`${styles.button} ${styles.aInscription}`} onClick={() => router.push('/Accueil')}>← Aller a Accueil</button>
                </div>
                <div className={styles.promptWrapper}>
                    <button className={`${styles.button} ${styles.aConnexion}`} onClick={() => router.push('/Inscription')}>← Aller a Inscription</button>
                </div>
            <form className={styles.formAuthentificationWrapper}>
                <div className={styles.title}>
                    <h2>Connexion</h2>
                </div>
                <div className={styles.promptWrapper}>
                <label className={styles.label} htmlFor="email">Email address:</label>
                    <input
                        placeholder="tonemail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        className={styles.input}
                    />
                </div>
                <div className={styles.promptWrapper}>
                    <label className={styles.label} htmlFor="pwd">Password:</label>
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