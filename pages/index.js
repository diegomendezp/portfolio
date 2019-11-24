import React from 'react';
import PageBackground from '../components/PageBackground/PageBackground';
import Meta from '../components/Meta';
import PageContentWrapper from '../styles/PageContent';
import Description from '../components/Description';

function Home() {
  return (
    <React.Fragment>
      <Meta />
      <PageBackground />
      <PageContentWrapper>
        <Description />
      </PageContentWrapper>
    </React.Fragment>
  );
}

export default Home;