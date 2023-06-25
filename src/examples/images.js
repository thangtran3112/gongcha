import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
        <article>
            <StaticImage 
                src='../assets/images/themes/theme2.jpg' 
                alt='food'
                height={400}
                placeholder="blurred"
                layout="fixed"
                width={200}
                className="example-img"
                as='div'
            />
            <h4>Fixed</h4>
        </article>
        <article>
            <StaticImage 
                src='../assets/images/themes/theme2.jpg' 
                alt='food'
                height={400}
                placeholder="dominantColor"
                layout="constrained"
                className="example-img"
                as='section'
            />
            <h4>constrained/default</h4>
        </article>
        <article>
            <StaticImage 
                src='../assets/images/themes/theme2.jpg' 
                alt='food'
                placeholder="dominantColor"
                layout="fullWidth"
                className="example-img"
                as='article'
            />
            <h4>Full Width</h4>
        </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width:70vw;
    margin: 0 auto;
    display: grid;
    text-align: center;
    gap: 2rem;
    article {
        border: 2px solid red;
    }
    .example-img {
        border-radius: 1rem;
        height: 300px;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
        height: 200px;
    }
`

export default Images
