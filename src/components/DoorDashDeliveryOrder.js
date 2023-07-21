import React from 'react'

/**
 * Do not use <Link> from React Dom, as it will not reload the contact page
 * Which would cause the Recaptcha to not showing up
 */
const DoorDashDeliveryOrder = () => {
    return (
        <a href='https://order.online/business/gong-cha-kelowna-11666410' className='btn'>
            Order Delivery
        </a>
    )
  }
  
  export default DoorDashDeliveryOrder