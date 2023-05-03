import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';

const Error = () => {
  return (
    <Wrapper className='container'>
        <div className="error grid">
        <img src='./images/error.svg' alt="" /><span className='page-not-found'>PAGE NOT FOUND</span>

        <NavLink to="/">
            <Button className='btn'>GOTO HOME</Button>
        </NavLink>


        </div>
        

            
        </Wrapper>
  )
}

const Wrapper = styled.section`
.error{
    place-items:center;
    gap: 2rem;
}
.page-not-found{
    font-size: 6rem;
    font-weight: 900;
}

.btn{
    font-size: 3rem;
    margin-top: 0rem;
}
`;
export default Error