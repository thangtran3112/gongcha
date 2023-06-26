import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

const Locations = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
            <article>
              <h2>
                Gong Cha Gordon
              </h2>
              <p className='address'>
                Soft Opening from July 1st, 2023
              </p>
              <p className='address'>
                Grand Opening from July 21st, 2023
              </p>
              <p>
                <span className='location'>Address:</span> 1101 Harvey Ave, #99, Kelowna, BC V1Y 6E8
              </p>
              <p>
                <span className='location'>Phone:</span> (236)-420-4246
              </p>
              <p>
                <span className='location'>Text Order:</span> (587)-429-4268
              </p>
              <p>
                <span className='location'>Email:</span> gongchakelowna@gmail.com
              </p>
              <a href='/contact'  className='btn'>
                contact
              </a>
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