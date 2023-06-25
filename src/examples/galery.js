import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const query = graphql`
    {
        allFile(
            filter: {relativePath: {}, relativeDirectory: {eq: "menu"}, extension: {ne: "svg"}}
        ) 
        {
            totalCount
            nodes {
                name
                childrenImageSharp {
                    gatsbyImageData(
                        width: 200
                        height: 150
                        layout: FIXED
                        placeholder: BLURRED
                    )
                }
            }
        }
    }
`

const Galery = () => {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes;
    console.log(nodes);

    return (
        <Wrapper>
            {nodes.map((myImage, index) => {
                const { name } = myImage;
                const pathToImage = getImage(myImage.childrenImageSharp[0]);
                console.log(myImage);
                return (
                <article key={index} className='item'>
                    <GatsbyImage 
                        image={pathToImage}
                        alt={name}
                        className='gallery-img'
                    />
                    <p>{name}</p>
                </article>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    .item {
        margin-right: 1rem
    }
    .gallery-img {
        border-radius: 1rem
    }
`

export default Galery
