import styled from 'styled-components';

const BackgroundText = styled.span`
  font-family: "Icon-Font-Regular";
  color: white;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: 0.033rem;
  font-weight: 500;
  text-transform: uppercase;

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    font-size: 3rem;
    line-height: 3.2rem;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 3.5rem;
    line-height: 3.5rem;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: 3.5rem;
    line-height: 3.5rem;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width: 1441px) {
    font-size: 3.8rem;
    line-height: 3.8rem;
    letter-spacing: 0.04rem;
  }
`

export default BackgroundText;