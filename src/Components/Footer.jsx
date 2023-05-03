import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"


const Footer = () => {
  return (
    <Wrapper>

      <section className="contact-short">
      <div className='grid grid-two-column'>
      <div>
        <h3>Ready to get started? </h3>
        <h3>Talk to us Today </h3>
        </div>

        <div>
          <NavLink to='/'>
            <Button >Get Started</Button>
          </NavLink>
        </div>

      </div>


      </section>


      {/* footer section  */}

<footer>
  <div className="container grid grid-four-column">

    <div className='footer-about'>
      <h3>Front end devlopment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className='footer-subscribe'>
      <h3>Subscribe to get important updates</h3>
      <form action="#">
        <input type="email" name="email" required autoComplete='off' placeholder='Email' />
        <input type="submit" value="Subscribe" />
      </form>
    </div>


    <div className='footer-social'>
      <h3>Follow us</h3>
      <div className="footer-social--icons">
          <div><a href='https://www.youtube.com' target="_blank"><FaDiscord className="icons"  fontSize={"3rem"} /> </a>
          </div>
          <div><a href='https://www.youtube.com' target="_blank"> <FaInstagram className="icons"  fontSize={"3rem"} /> </a>
          </div>
          <div> <a href='https://www.youtube.com' target="_blank"><FaYoutube className="icons"  fontSize={"3rem"} /> </a>
          </div>

      </div>
    </div>


{/* 4th column  */}
    <div>
      <div className="footer-contact">
        <h3>Call Us</h3>
        <h3>+91 9923832638</h3>
      </div>

    </div>

  </div>
  {/* bottom section  */}

  <div className="footer-bottom--section">
    <hr />
    <div className="container grid grid-two-column">
      <p>@{new Date().getFullYear()} RobinFrontEnd. All Rights Reserved</p>
      <div>
        <p>PRIVACY POLICY</p>
        <p>TERMS & CONDITIONS</p>
      </div>
    </div>
  </div>

</footer>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  
.contact-short{

  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({theme})=>theme.colors.bg};
  border-radius: 1rem;
  box-shadow:${({theme})=>theme.colors.shadow};
  transform: translateY(90%);

.grid div:last-child {
  justify-self: end;
  align-self: center;
}
}


footer {
  padding: 14rem 0 9rem 0;
  background-color: ${({theme})=>theme.colors.footer_bg};
  h3{
    color:${({theme})=>theme.colors.hr};
    margin-top: 2.4rem;
  }
  p{
    color:${({theme})=>theme.colors.white};
    
  }

  .footer-social--icons{
    display: flex;
    gap: 2rem;
    div{
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({theme})=>theme.colors.white};
      .icons{
        color:${({theme})=>theme.colors.white};
        font-size: 2.4rem;
        position:relative;
        cursor: pointer;
      }
    }
  }

  .footer-bottom--section{
    padding-top: 9rem;
    
    hr{
      margin-bottom: 2rem;

      color: ${({theme})=>theme.colors.hr};
      height: 0.1px;

    }
  }


  

}


`;

export default Footer