import React from 'react'

/**
 * Do not use <Link> from React Dom, as it will not reload the contact page
 * Which would cause the Recaptcha to not showing up
 */
const OrderPickup = () => {
    return (
        <a href='https://www.clover.com/online-ordering/gong-cha-kelowna' className='btn'>
            Order PickUp
        </a>
    )
  }
  
  export default OrderPickup