import React from 'react'
import Head from "next/head"
import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import {useRouter} from "next/router"
import Router from 'next/dist/server/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({title, keywords, description, children}) {
  const router = useRouter();
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
        </Head>
        <Header/>
        <ToastContainer autoClose="1000"/>
        {router.pathname === '/' && <Showcase/>}
        
        <div className={styles.container}>
        {children}
        </div>
        <Footer/>
    </div>
  )
}


Layout.defaultProps = {
    title: "DJ Events | Find the hottest parties",
    
}