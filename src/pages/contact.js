import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
        <main className="page">
          <section className='contact-page'>
            <article className='contact-info'>
              <h3>
                Connecting with us ?
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
                Interested in partnering with us for future stores?
              </p>
              <p>
                Connect with us through email or simply filling in the form:
              </p>
              <p className='address'>
                Email: gongchakelowna@gmail.com
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

