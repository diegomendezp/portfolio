import React, { useEffect } from 'react';
import PageBackground from '../components/PageBackground/PageBackground';
import Meta from '../components/Meta';
import PageContentWrapper from '../styles/PageContent';
import Description from '../components/Description';
import Projects from '../components/Project/Projects';
import initAOS from '../lib/aos';
import 'aos/dist/aos.css';
import PageParagraph from '../styles/fontsStyles/PageParagraph';
function Home() {
  useEffect(() => {
    initAOS(); 
  }); 
  return (
    <>
      <PageBackground />
      <PageContentWrapper>
        <div className="vertical-content">
          <Description />
          <Projects />
          <div className="copyright">
            <PageParagraph>© Copyright {new Date().getFullYear()} Diego Méndez</PageParagraph>
          </div>
        </div>
        <div className="horizontal-content">
          <PageParagraph>Rotate your phone please.</PageParagraph>
          <img className="phone-return" src="/static/img/phoneRotate.gif" alt="phone-rotate"/>
        </div>
      </PageContentWrapper>
    </>
  );
}

export default Home;