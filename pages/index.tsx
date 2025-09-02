import Head from 'next/head'

import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProjectContainer from '../components/ProjectContainer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Abhijit Paul</title>
        <meta name="description" content="Abhijit's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <ProjectContainer />
      </main>

      <Footer />
    </div>
  )
}

export default Home
