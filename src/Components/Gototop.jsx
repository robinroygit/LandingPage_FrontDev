import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const Gototop = () => {
    const [isVisible,setIsVisible] = useState(false);
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
      
      if(winScroll>heightToHidden){
          setIsVisible(true)
        }else{
            setIsVisible(false);
        }

    };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return ()=>window.removeEventListener("scroll",listenToScroll);

  }, []);
  return (
    <Wrapper>

        {isVisible && 
      <div className="gotobtn" onClick={gotobtn}>
        <span>
          <FaArrowUp className="gotobtn--icon" />{" "}
        </span>
      </div>}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .gotobtn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    display: flex;
    z-index: 999;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
`;

export default Gototop;
