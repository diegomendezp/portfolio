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
    <React.Fragment>
      <Meta />
      <PageBackground />
      <PageContentWrapper>
        <Description />
        <Projects />
        <div className="copyright">
          <PageParagraph>Copyright © 2019 Diego Méndez.</PageParagraph>
        </div>
      </PageContentWrapper>
    </React.Fragment>
  );
}

export default Home;