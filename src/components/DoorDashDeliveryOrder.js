import React from 'react'

/**
 * Do not use <Link> from React Dom, as it will not reload the contact page
 * Which would cause the Recaptcha to not showing up
 */
const DoorDashDeliveryOrder = () => {
    return (
        <a href='https://order.online/store/gong-cha-kelowna-kelowna-25137513' className='btn'>
            Order Delivery
        </a>
    )
  }
  
  export default DoorDashDeliveryOrder