import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Main from './Main'
import Form from './Form'

export default function Home() {
  return (
   <>
    <Navbar/>
    <Main/>
    <Form/>
    <Footer/>
   </>
  )
}
