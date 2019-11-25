import styled from 'styled-components';

const PageContentWrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  position: relative;
  .horizontal-content {
    display: none;
  }

  .description-container {
    width: 100%;
    height: 100vh;
    
    .description-content {
      /* border-top: 1px solid rgba(224,224,224, 0.4);
      border-bottom: 1px solid rgba(224,224,224, 0.4); */
      /* padding: 5% 0; */
      /* background-color: #1d1d1f; */
      padding-top: 5%;
    }

    .description-text {
      p {
        margin-bottom: 2%;
      }
    }

    .networks {
      margin-top: 8%;
      position: relative;
      p {
        margin: 0;
      }
      .networks-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
          align-self: flex-start;
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
    bottom: 0.0%;
    p { 
      font-size: 10px;
    }
  } 
  @media screen and (orientation: landscape) and (max-height: 414px){
    .horizontal-content {
      display: block;
      height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;

      .phone-return {
        width: 8%;
      }
      p {
        margin-right: 3%;
      }
    }
    .vertical-content {
      display: none;
    }
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
        padding-top: 3%;
        width: 85%;
        margin: 0 auto;
      }
      .networks {
        margin-top: 3%;
        p {
          margin: 0;
        }
      }
    }
  }
  @media only screen and (min-width:1441px){
    width: 95%;
    .description-container {
      width: 100%;
      .description-content {
        padding-top: 3%;
        width: 80%;
        margin: 0 auto;
      }
      .networks {
        margin-top: 2%;
        p {
          margin: 0;
        }
      }
    }
  }
`;

export default PageContentWrapper;
