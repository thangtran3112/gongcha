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
                    Soft Opening from July 5, 2023 🎉
                  </h3>
                </div>
              </div>
            </header>
            <section className='about-page'>
              <article>
                  <h4>
                    Soft Opening: July 5, 2023 🎉
                  </h4>
                  <p className='address'>
                    Promo: Buy-2-get-1-free, only July 5-6 🎉
                  </p>
              </article>
              <article>
                  <h4>
                    Grand Opening: July 21, 2023 🎉
                  </h4>
                  <p className='address'>
                    Promo: Buy-1-get-1 free on Grand opening date &hearts;
                  </p>
              </article>
        </section>
          </main>
      </Layout>
  );
}

