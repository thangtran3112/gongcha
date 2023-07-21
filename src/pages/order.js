import React from 'react'
import Layout from '../components/Layout'
import OrderPickup from '../components/OrderPickup'
import { StaticImage } from 'gatsby-plugin-image';
import DoorDashDeliveryOrder from '../components/DoorDashDeliveryOrder';

const Order = () => {
  return (
    <Layout>
    <main className='page'>
      <section className='about-page'>
          <article>
            <h3>
              PickUp Order
            </h3>
            <p>
              To order your favorite drinks ahead for In-store PickUp, please click the button below for the best price.
            </p>
            <OrderPickup/>
            <h3>
              Delivery
            </h3>
            <p>
              To oder your favortite drinks and snack and get delivery, please click the button below.
            </p>
            <DoorDashDeliveryOrder/>
          </article>
          <StaticImage 
              src='../assets/images/menu/theme3.jpg'
              alt='4 tea cups'
              className='about-img'
              placeholder='dominantColor'
            />
        </section>
      </main>
    </Layout>
  )
}

export default Order