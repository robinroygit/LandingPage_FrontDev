import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
          <img src="./images/logo12.png" alt="./images/logo.png" className='logo' />
        </NavLink>

        <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({theme})=>theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    width: 18rem;
    height: 9rem;
    padding-top: 0;

    padding-bottom: 0;
    margin-top: 1rem;
    /* aspect-ratio: 3/4; */
    /* mix-blend-mode: color-burn; */
    object-fit: cover;

  }

`;

export default Header