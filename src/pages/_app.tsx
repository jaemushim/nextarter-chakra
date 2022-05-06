/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/layout';
import customTheme from '@/styles/customTheme';

import defaultSEOConfig from '../../next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={customTheme}>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </Head>
    <DefaultSeo {...defaultSEOConfig} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
