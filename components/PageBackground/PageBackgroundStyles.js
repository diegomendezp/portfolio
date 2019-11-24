import styled from 'styled-components';

const BackgroundWrapper = styled.section`
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #1d1d1f;
  display: flex;
  align-items: center;
  z-index: -1;

   .marquee {
    width: 100%;
    white-space: nowrap;
    position: absolute;
    display: inline-block;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased; 
  }
`;

export default BackgroundWrapper;