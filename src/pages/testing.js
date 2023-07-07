import React from 'react'
import Layout from '../components/Layout'
import Galery from '../examples/galery'

const Testing = ({data}) => {
  return (
    <Layout>
      <main className='page'>
        <Galery/>
      </main>
    </Layout>
  )
}

export default Testing

