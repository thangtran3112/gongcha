import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import ContactLink from '../components/ContactLink';

const About = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
            <article>
              <h2>
                Brewing Happiness
              </h2>
              <p>
                Established in 1996 in Taiwan, and after years of expertise development, Gong cha became and is one of the world’s fastest growing tea brands, offering high quality beverages at nearly 2000 locations around the world.
              </p>
              <p>
                We brews four types of classic tea: Black tea, Green tea, Oolong tea, and Earl Grey tea. 
                Using only loose leaf tea leaves, these teas are brewed at just the right temperature for just the right amount of time.
              </p>
              <p>
              We also offers a wide selection of the very best toppings, including pearls and various jellies, to pair with these teas.
              </p>
              <p>
                All drinks are served at their freshest by brewing new batches of tea and pearls every four hours. 
                This commitment to excellence ensures that Gong cha is always brewing happiness wherever we serve our customers.
              </p>
              <ContactLink/>
            </article>
            <StaticImage 
              src='../assets/images/themes/vertical.png'
              alt='4 tea cups'
              className='about-img'
              placeholder='dominantColor'
            />
        </section>
      </main>
    </Layout>
  )
}

export default About;