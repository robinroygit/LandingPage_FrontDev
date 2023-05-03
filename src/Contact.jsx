import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>

      <h2 className='common-heading'>Feel Free To Join Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28037.212522581005!2d77.27428838127375!3d28.550191026011873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679920108870!5m2!1sen!2sin" 
      width="100%"
      height="450"
      style={{border:0 }}
      allowFullScreen="allow"
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xqkodvbr" method="POST" className='form-input'>

            <input type="text" name="username" placeholder='username'  autoComplete='off' required />
            <input type="email" name="email" placeholder='Email'  autoComplete='off' required />

            <textarea name="message" cols="30" rows="6" required >

            </textarea>
              <input type="submit" value="send" />
          </form>
        </div>
      </div>

    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 9rem 0 5rem 0;

  .container{
    margin-top: 6rem;
    text-align: center;

    .contact-form{
      max-width: 50rem;
      margin: auto;

      .form-input{
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"]{
            cursor: pointer;
            transition: all 0.2s;

            &:hover{
              background-color: ${({theme})=>theme.colors.white};
              color: ${({theme})=>theme.colors.btn};
              border: 1px solid ${({theme})=>theme.colors.btn};
                transform: scale(0.92);

            }
        }


      }
    }
  }





`;
export default Contact