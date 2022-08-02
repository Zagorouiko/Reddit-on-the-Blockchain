import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header'

const Layout = (props) => {
  return (
  <Container>
  <style>
  {`
    html, body {
    background-color: #dae0e6 !important;
  }
  `}
  </style>
  <Head>
    <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital@1&family=Noto+Sans:wght@300&display=swap" rel="stylesheet" />
  </Head>
  <Header />
    {props.children}
  </Container>
  );
};

export default Layout;
