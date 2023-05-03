import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from './context'
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Services = () => {

  const {services} =useGlobalContext();


  return (
    <Wrapper className='container'>
      <h2 className='common-heading'>Our Services</h2>
      <div className="grid grid-three-column">
        {
          services.map((curElem)=>{
            const {id,title,image,description} = curElem;
            return(
              <div key={id} className="card">
                <figure>
                  <img src={image} alt={title} />
                </figure>
                <div className="card-data">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <NavLink to="/services">
                  <Button  className="btn">Read More</Button>

                  </NavLink>
                </div>
              </div>
            )
          })
        }
      </div>
      </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0;


.container{
  max-width: 120rem;
}

figure{
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.2s linear;


  img{
    width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    /* background-color: rgb(0, 0, 0, 0.5); */
    transition: all 0.2s linear;
    cursor: pointer;

  }
  &:hover::after{
    width: 100%;
  }
  &:hover img{
    transform: scale(1.2);
  }
  
}

.card{
  height: auto;
  position: relative;
  height: 40rem;
  border: 0.1rem solid rgb(170 170 170 /40%);
  .card-data{
    padding: 0 2rem;
  }

}
.btn{
  position: absolute;
  bottom: 2%;
  left: 2%;
  border-radius: 2rem;
  font-size: 1.4rem;

}

`;
export default Services