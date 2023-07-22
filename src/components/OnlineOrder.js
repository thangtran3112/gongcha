import React from 'react'

/**
 * Do not use <Link> from React Dom, as it will not reload the contact page
 * Which would cause the Recaptcha to not showing up
 */
const OnlineOrder = ({linkAddress, description}) => {
    return (
        <a href={linkAddress} className='btn'>
            {description}
        </a>
    )
  }
  
  export default OnlineOrder