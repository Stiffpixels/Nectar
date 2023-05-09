import Image from 'next/image'
import Head  from 'next/head'
import Header from './Components/header.tsx'
import Main from './Components/main.tsx'


const Home =()=>{
  return <>
   <Head>
    <title>Kashi Sweets</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Shrikhand&display=swap" rel="stylesheet"/>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   </Head>
   <Header />
   <Main />
  </>
}

export default Home;