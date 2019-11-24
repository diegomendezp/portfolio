import Head from 'next/head';

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Diego Méndez 👨‍💻</title>
      </Head>
      <style jsx global>{`
       .* {
          box-sizing: border-box;
        }
        @font-face {
          font-family: "Icon-Font-Regular";
          src: url(/static/fonts/IconFont-Regular-0.9.woff);
          src: local("Icon-Font-Regular"),
            url(/static/fonts/IconFont-Regular-0.9.woff) format("woff"),
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "WhyteInktrap-Regular";
          src: url(/static/fonts/WhyteInktrap-Light.woff2);
          src: local("WhyteInktrap-Regular"),
            url(/static/fonts/WhyteInktrap-Light.woff2) format("woff"),
          font-weight: normal;
          font-style: normal;
        }

        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
          background-color: #1d1d1f;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Meta;
