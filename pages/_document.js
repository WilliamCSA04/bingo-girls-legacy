// TODO: Update it to a version witout this error
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { customTheme } from '../theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Site de Liwphael, Myumii e Misthy. Streamer da Twitch"
          />
          {process.env.NODE_ENV === 'production' ? (
            <meta name="robots" content="index, follow" />
          ) : (
            <meta name="robots" content="noindex, nofollow" />
          )}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
