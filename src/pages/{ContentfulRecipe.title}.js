import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsCart4, BsCupHotFill, BsSnow2} from 'react-icons/bs';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const RecipeTemplate = ({data}) => {
    const {
        title, 
        vegan, 
        content, 
        milk, 
        servings, 
        hot,
        cold,
        image,
        description: {description}
    } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    const {
        ingredients,
        instructions,
        tags,
        tools,
    } = content;
    return (
        <Layout>
            <main className='page'>
                <div className='recipe-page'>
                    {/*hero section*/}
                    <section className="recipe-hero">
                        <GatsbyImage
                            image={pathToImage}
                            alt={title}
                            className='about-img'
                        />
                        <article className='recipe-info'>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {/*icon*/}
                            <h5>Availablity:</h5>
                            <div className='recipe-icons'>
                                <article>
                                    <BsSnow2/>
                                    <h5>Cold</h5>
                                    <p>
                                        {cold}
                                    </p>
                                </article>
                                <article>
                                    <BsCupHotFill/>
                                    <h5>Hot</h5>
                                    <p>{hot}</p>
                                </article>
                                <article>
                                    <BsCart4/>
                                    <h5>
                                        <Link className='active-link' to='/order'>Order Online</Link>
                                    </h5>
                                </article>
                            </div>
                            {/*tag*/}
                            <p className='recipe-tags'>
                                Tags : {tags.map((tag, index)=>{
                                    return <Link to={`/${tag}`} key={index}>
                                        {tag}
                                    </Link>
                                })}
                            </p>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

/**
 * Gatsby automatically fetch in the pageContext values, which is {id, title, __params}
 * In this case query variables are auto fetched
 * {
      id
      title
 * }
 */
export const query = graphql`
    query getSingleRecipe($title: String) {
        contentfulRecipe(title: {eq: $title}) {
            vegan
            title
            description {
                description
            }
            content {
                ingredients
                instructions
                tags
                tools
            }
            milk
            servings
            hot
            cold
            image {
                gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
            }
        }
    } 
`

export default RecipeTemplate
