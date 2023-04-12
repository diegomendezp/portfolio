import styled from 'styled-components';

const BackgroundWrapper = styled.section`
  position: fixed;
  height: 56px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  z-index: 1;
  mix-blend-mode: difference;

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