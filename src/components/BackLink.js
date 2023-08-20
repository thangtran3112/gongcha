import React from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'gatsby';

const BackLink = ({toPath, description}) => {
  return (
    <Link className='normal-link' to={toPath}>
        <TiArrowBack/>
        {description}
    </Link>
  )
}

export default BackLink
