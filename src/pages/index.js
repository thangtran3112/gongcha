import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

export default function Home() {
  return (
      <Layout>
          <main className='page'>
            <header className='hero'>
              <StaticImage 
                src='../assets/images/themes/theme24.png' 
                alt='4cups'
                className='hero-img'
                placeholder='blurred'
                layout="fullWidth"
              >
              </StaticImage>

              <div className='hero-container'>
                <div className='hero-text'>
                  <h3>
                    It's time for Boba &hearts;
                    <div className='nav-link hero-link'>
                        <Link 
                            to='/order' 
                            className='btn' 
                        >
                            Ordering Happiness →
                        </Link>
                    </div>
                  </h3>
                </div>
              </div>
            </header>
          </main>
      </Layout>
  );
}
