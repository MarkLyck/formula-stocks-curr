import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import withApolloClient from 'lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Global } from '@emotion/core'
import Layout, { globalStyles } from 'lib/layout'
import 'common/utils/fontAwesomeLibrary'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Head>
          <title>Formula Stocks</title>
          <Global styles={globalStyles} />
        </Head>
        <Layout>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} apolloClient={apolloClient} />
          </ApolloProvider>
        </Layout>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
