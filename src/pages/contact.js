import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
        <main className="page">
          <section className='contact-page'>
            <article className='contact-info'>
              <h3>
                Want to get in touch with us ?
              </h3>
              <p>
                Share your recent experience with Gong Cha Kelowna ?
              </p>
              <p>
                Looking for joining us ?
                We are constantly looking for growing our teams.
                Baristas, supervisors and store managers are welcome!
              </p>
              <p>
                Interested in partnering with us ?
                We are looking for partners/operators for our future second store in Kelowna as well.
              </p>
              <p className='address'>
                Gong Cha Gordon
              </p>
              <p className='address'>
                1101 Harvey Ave, Kelowna, BC V1Y 6E8, (236)-420-4246
              </p>
            </article>
            <article>
              <form 
                className='form contact-form' 
                action="https://formspree.io/f/xleyrjdy"
                method="POST"
              >
                <div className='form-row'>
                  <label htmlFor='subject'>Subject *</label>
                  <input type='text' name='subject' id='subject' required/>
                </div>
                <div className='form-row'>
                  <label htmlFor='name'>your name *</label>
                  <input type='text' name='name' id='name' required/>
                </div>
                <div className='form-row'>
                  <label htmlFor='email'>email *</label>
                  <input type='text' name='email' id='email' required/>
                </div>
                <div className='form-row'>
                  <label htmlFor='message'>message</label>
                  <textarea name='message' id='message' required/>
                </div>
                <div class="g-recaptcha" data-sitekey="6Ldk6cwmAAAAAPYTF11yrQ1AtWuJqFhiKQWaAn8c"></div>
                <button type='submit' className='btn block'>submit</button>
              </form>
            </article>
          </section>
        </main>
    </Layout>
  )
}

export default Contact

