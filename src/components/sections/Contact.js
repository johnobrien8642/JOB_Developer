import React, { useState } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

const Contact = () => {
  let [emailSuccess, setEmailSuccess] = useState(false)
  let [phoneSuccess, setPhoneSuccess] = useState(false)

  return (
    <section
    className='contactContainer'
    >
      <Element name='contactScrollEl' />
      <h1>Contact</h1>

      <div
        className='emailAndPhoneContainer'
      >
        <div
          className='emailContainer'
        >
          <h2>Email</h2>
            <div>
              <span>johnobriendeveloper@gmail.com</span>
              <img
                className='copyClipboard'
                alt='copy clipboard'
                src="https://img.icons8.com/material-outlined/64/000000/add-to-clipboard.png"
                onClick={() => {
                  var text = 'johnobriendeveloper@gmail.com'
                  navigator.clipboard.writeText(text)
                    .then(() => {
                      setEmailSuccess(true)

                      setTimeout(() => {
                        setEmailSuccess(false)
                      }, 1500)
                    })
                }}
              />
              <div 
                className={
                  emailSuccess ? 'arrowLeft email active' :
                  'arrowLeft hidden'
                }
              />
              <div
                className={
                  emailSuccess ? 'successMsg email active' : 
                  'successMsg email hidden'
                }
              >
                Copied
              </div>
            </div>
        </div>

        <div
          className='phoneContainer'
        >
          <h2>Phone</h2>
          <div>
            <span className='phone'>+15088648618</span>
            <img
              className='copyClipboard'
              alt='copy clipboard' 
              src="https://img.icons8.com/material-outlined/64/000000/add-to-clipboard.png"
              onClick={() => {
                var number = '+15088648618'
                navigator.clipboard.writeText(number)
                  .then(() => {
                    setPhoneSuccess(true)

                    setTimeout(() => {
                      setPhoneSuccess(false)
                    }, 1500)
                  })
              }}
            />
            <div 
              className={
                phoneSuccess ? 'arrowLeft phone active' :
                'arrowLeft phone hidden'
              }
            />
            <div
              className={
                phoneSuccess ? 'successMsg phone active' : 
                'successMsg phone hidden'
              }
            >
              Copied
            </div>
          </div>
        </div>
      </div>   
    </section>
  )
}

export default Contact;