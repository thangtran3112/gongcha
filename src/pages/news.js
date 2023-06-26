import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

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
              <h2>
                Happy Canada Day 🎉
              </h2>
              <p>
                We are looking toward for the soft opening of our first Kelowna location on Canada Day July 1st 2023.
              </p>
              <p>
                Contact us for more information or connect with us on Instagram for more updates.
              </p>
            </article>
        </section>
          </main>
      </Layout>
  );
}

