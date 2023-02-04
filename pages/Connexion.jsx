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
      <h1>HTTP 302 | Found Connexion Page</h1>
      <h1>The web page is under construction</h1>

      <div className={styles.container}>
     
      <form >
      <div>
        <a className={styles.aConnexion} onClick={() => router.push("/Inscription")}>← Aller a Inscription</a>
            <h2>Connexion</h2>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
        
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
     </main>
    </>
  }