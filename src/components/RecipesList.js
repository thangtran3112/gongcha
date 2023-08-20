import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const RecipesList = ({recipes= [], imageClassName='recipe-img'}) => {
  return (
    <div className='recipes-list'>{
        recipes.map((recipe) => {
            const {id, title, image, prepTime, cookTime} = recipe;
            const pathToImage = getImage(image);

            //using slug to convert title such as Black Milk Tea into black-milk-tea, 
            //which is corresponded to our auto-generated page "localhost:8000/black-milk-tea/""
            const slug = slugify(title, {lower: true})
            return <Link key={id} to={`/${slug}`} className='recipe'>
                        <GatsbyImage 
                            image={pathToImage} 
                            className={imageClassName} 
                            alt={title}
                        />
                        <h5>{title}</h5>
                    </Link>
        })}
    </div>
  )
}

export default RecipesList
