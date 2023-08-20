import * as React from "react"
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import ContactLink from '../components/ContactLink';
import { graphql } from 'gatsby'
import RecipesList from "../components/RecipesList";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className='about-main'>
        <section className='about-page'>
            <article>
              <h2>
                Brewing Happiness
              </h2>
              <p>
                Gong Cha brews four types of classic tea: Black tea, Green tea, Oolong tea, and Earl Grey tea. 
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
      <main className='featured-page'>
        <section className='featured-recipes'>
              <h5>Signature Drinks!</h5>
              <RecipesList recipes={recipes} imageClassName='featured-img'/>
          </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        vegan
        milk
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About;