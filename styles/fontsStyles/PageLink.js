import styled from 'styled-components';

const PageLink = styled.a`
  font-family: "Space-Mono";
  color: white;
  font-size: 0.9rem;
  line-height: 1rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  transition: all ease .5s;
  display: inline-block;
  color: #5b5b5b;
  margin-top: 2%;
  text-decoration: none;
  &:visited {
    color: #5b5b5b;
    text-decoration: none;
  }
  &:hover{
    color: white;
    text-decoration: none;
  }
    
  @media only screen and (min-width:415px) and (max-width:768px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;
    margin-top: 1%;    
    margin-bottom: 1%;
  } 
  @media only screen and (min-width:769px) and (max-width:1024px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;    
    margin-top: 1%;    
    margin-bottom: 1%;    
  }
  @media only screen and (min-width:1025px) and (max-width:1440px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;
    margin-top: 1%;
  }
  @media only screen and (min-width:1441px){
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;
    margin-top: 1%;
  }
`

export default PageLink;