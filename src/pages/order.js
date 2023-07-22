import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image';
import OnlineOrder from '../components/OnlineOrder';

const CLOVER_LINK = 'https://www.clover.com/online-ordering/gong-cha-kelowna';
const STOREFRONT_LINK = 'https://order.online/business/gong-cha-kelowna-11666410';
const DOORDASH_LINK = 'https://www.doordash.com/en-CA/store/gong-cha-kelowna-kelowna-25137513/';

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
              To order and pick up your favorite drinks ahead and enjoy the best affordable prices.
            </p>
            <OnlineOrder description='Order PickUp' linkAddress={CLOVER_LINK}/>
            <h3>
              Delivery Order
            </h3>
            <p>
              Delivery orders are subjected to DoorDash service fees.
            </p>
            <OnlineOrder description='Online Delivery' linkAddress={STOREFRONT_LINK}/>
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