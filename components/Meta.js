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
          font-family: "Space-Mono";
          src: url(/static/fonts/Space-Mono.woff2);
          src: local("Space-Mono"),
            url(/static/fonts/Space-Mono.woff2) format("woff2")
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
          font-size: 81%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Meta;
