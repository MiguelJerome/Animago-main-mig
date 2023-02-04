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
      <h1>HTTP 302 | Found Inscription Page</h1>
      <h1>The web page is under construction</h1>
      
      <div className={styles.container}>
    
      <form >
        <div>
        <a className={styles.aInscription} onClick={() => router.push("/Connexion")}>← Aller a Connexion</a>
            <h2>Inscription</h2>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
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