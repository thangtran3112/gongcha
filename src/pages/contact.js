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
            </article>
            <article>
              <form className='form contact-form' action="https://getform.io/f/c9f72f96-2c02-4d44-9ceb-b93e920a09ef" method="POST">
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
                <div class="h-captcha" data-sitekey="55290c2a-406f-4fcb-98a6-726175bd9ad3"></div>
                <button type='submit' className='btn block'>submit</button>
              </form>
            </article>
          </section>
        </main>
    </Layout>
  )
}

export default Contact

