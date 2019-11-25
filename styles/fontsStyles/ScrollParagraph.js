import styled from 'styled-components';

const ScrollParagraph = styled.p`
  font-family: "Space-Mono";
  color: #5b5b5b;
  font-size: 0.8rem;
  line-height: 1.3;
  letter-spacing: 0.02rem;
  mix-blend-mode: difference;

  @media only screen and (min-width:415px) and (max-width:768px){
    font-size: 0.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;
  } 

  @media only screen and (min-width:769px) and (max-width:1024px){
    font-size: 0.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;    
  }
  @media only screen and (min-width:1025px) and (max-width:1440px){
    font-size: 0.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width:1441px){
    font-size: 0.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;
  }
`

export default ScrollParagraph;