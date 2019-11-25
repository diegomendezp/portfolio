import styled from 'styled-components';

const PageParagraph = styled.p`
  font-family: "Courier-Regular";
  color: white;
  font-size: 0.9rem;
  line-height: 1rem;
  letter-spacing: 0.02rem;
    
  @media only screen and (min-width:415px) and (max-width:768px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;
  } 
  @media only screen and (min-width:769px) and (max-width:1024px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;    
  }
  @media only screen and (min-width:1025px) and (max-width:1440px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width:1441px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;
  }
`

export default PageParagraph;