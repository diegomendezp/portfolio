import styled from 'styled-components';

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justify ? props.justify : 'center'};
  width: 100%;
  z-index: 1;
  padding: 10% 0;

  .project-container {
    width: 100%;

    p {
      margin: 0;
      margin-top: 2%;
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  .bold {
    font-weight: bold;
  }

  img {
    object-fit: cover;
    width: 100%;
    margin-bottom: 2%;
  }

  a {
    color: white;
    text-decoration: none;
    &:visited {
      text-decoration: none;
      color: white;
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    padding: 8% 0;
    .project-container {
      p {
        margin-top: 1%;
      }
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 8% 0;
    .project-container {
      p {
        margin-top: 1%;
      }
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    padding: 4% 0;
    .project-container {
      width: ${props => props.size ? props.size : '100%'};

      p {
        margin-top: 1%;
      }
    }
  }
  @media only screen and (min-width: 1441px) {
    padding: 3% 0;
    .project-container {
      width: ${props => props.size ? props.size : '100%'};
      p {
        margin-top: .5%;
      }
    }
  }
`;

export default ProjectWrapper;