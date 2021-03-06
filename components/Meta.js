import Head from 'next/head';

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="web development, computer engineer, reactjs, nodejs, nextjs, redux, spanish, madrid" />
        <meta name="description" content="Computer Engineer for React.js, Node.js, Next.js and JavaScript. Based in Madrid, Spanish/English speaking. Web Developer and Bootcamp Instructor." />
        <meta name="author" content="Diego Méndez" />
        <title>Diego Méndez</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <link rel="manifest" href="/static/favicon/manifest.json" />
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
