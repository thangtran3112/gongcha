import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import ContactLink from '../components/ContactLink';

const Locations = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
            <article>
              <h2>
                Gong Cha Kelowna (Capri Centre)
              </h2>
              <p>
                <span className='location'>Address:</span> 1101 Harvey Ave, #99, Kelowna, BC V1Y 6E8
              </p>
              <p>
                <span className='location'>Phone:</span> (236)-420-4246
              </p>
              <p>
                <span className='location'>Catering:</span> (587)-429-4268
              </p>
              <p>
                <span className='location'>Email:</span> gongchakelowna@gmail.com
              </p>
              <ContactLink/>
            </article>
            <StaticImage 
              src='../assets/images/themes/brownsugar.jpg'
              alt='4 tea cups'
              className='about-img'
              placeholder='dominantColor'
            />
        </section>
      </main>
    </Layout>
  )
}

export default Locations;