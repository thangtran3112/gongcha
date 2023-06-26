import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';

export default function News() {
  return (
      <Layout>
          <main className='page'>
            <header className='hero'>
              <StaticImage 
                src='../assets/images/themes/theme24.png' 
                alt='opening'
                className='hero-img'
                placeholder='blurred'
                layout="fullWidth"
              >
              </StaticImage>

              <div className='hero-container'>
                <div className='hero-text'>
                  <h3 className="address">
                    Soft Opening on Canada Day 2023 🎉
                  </h3>
                </div>
              </div>
            </header>
            <section className='about-page'>
              <article>
                <h4>
                  Happy Canada Day 🇨🇦
                </h4>
                <p>
                  We are looking toward for the soft opening of our first Kelowna location on Canada Day July 1st, 2023.
                </p>
                <h4>Celebrating with us &hearts;</h4>
                <p className='address'>
                  Buy-2-get-1-free, only on July 1-2, 2023 🎉
                </p>
              </article>
        </section>
          </main>
      </Layout>
  );
}

