import styled from 'styled-components';

const DescriptionParagraph = styled.p`
  font-family: "Space-Mono";
  color: white;
  font-size: 1rem;
  line-height: 1.3;
  letter-spacing: 0.02rem;
  mix-blend-mode: difference;
  
  @media only screen and (min-width:376px) and (max-width:414px){
    font-size: 1.2rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;
  } 

  @media only screen and (min-width:415px) and (max-width:768px){
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;
  } 

  @media only screen and (min-width:769px) and (max-width:1024px){
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;    
  }
  @media only screen and (min-width:1025px) and (max-width:1440px){
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width:1441px){
    font-size: 1.8rem;
    line-height: 1.3;
    letter-spacing: 0.04rem;
  }
`

export default DescriptionParagraph;