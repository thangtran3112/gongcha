import React from 'react'

/**
 * Do not use <Link> from React Dom, as it will not reload the contact page
 * Which would cause the Recaptcha to not showing up
 */
const ContactLink = () => {
    return (
        <a 
        href='/contact' 
        className='btn'
        >
            contact
        </a>
    )
  }
  
  export default ContactLink