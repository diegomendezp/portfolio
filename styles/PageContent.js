import styled from 'styled-components';

const PageContentWrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  position: relative;

  .description-container {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    
    .description-content {
      border-top: 1px solid rgba(224,224,224, 0.4);
      border-bottom: 1px solid rgba(224,224,224, 0.4);
      padding: 5% 0;
      background-color: #1d1d1f;
    }

    .description-text {
      p {
        margin-bottom: 2%;
      }
    }

    .networks {
      margin-top: 8%;
      p {
        margin: 0;
      }
      .networks-list {
        display: flex;
        flex-direction: column;
        a {
          transition: all ease .5s;
          display: inline-block;
          color: #5b5b5b;
          margin-top: 2%;
          &:visited {
            color: #5b5b5b;
          }
          &:hover{
            color: white;
          }
        }
      }
    }
  }

  .projects-container {
    width: 100%;
    padding-bottom: 5%;
  }

  .copyright {
    position: absolute;
    bottom: 0.1%;
  } 

  @media only screen and (min-width:415px) and (max-width:768px){
    width: 95%;
    .description-container {
      .description-text {
        p {
          margin-bottom: 0%;
        }
      }
      .networks {
        margin-top: 5%;
        .networks-list {
        a {
          margin-top: 1%;    
          margin-bottom: 1%;    
        }
      }
      }
    }
  } 
  @media only screen and (min-width:769px) and (max-width:1024px){
    width: 95%;
    .description-container {
      .description-text {
        p {
          margin-bottom: 0%;
        }
      }
      .networks {
        margin-top: 3%;
        .networks-list {
        a {
          margin-top: 1%;    
          margin-bottom: 1%;    
        }
      }
      }
    }
  }
  @media only screen and (min-width:1025px) and (max-width:1440px){
    width: 95%;
    .description-container {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      .description-content {
        padding: 3% 0;
        width: 50%;
      }
      .networks {
        margin-top: 5%;
        p {
          margin: 0;
        }
        .networks-list {
          a {
            margin-top: 2%;
          }
        }
      }
    }
  }
  @media only screen and (min-width:1441px){
    width: 95%;
    .description-container {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      .description-content {
        padding: 3% 0;
        width: 50%;
      }
      .networks {
        margin-top: 5%;
        p {
          margin: 0;
        }
        .networks-list {
          a {
            margin-top: 1%;
          }
        }
      }
    }
  }
`;

export default PageContentWrapper;
