import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import withApolloClient from '../lib/withApollo'
import { ApolloProvider } from '@apollo/react-hooks'
import Layout from 'lib/layout'
import '~/common/utils/fontAwesomeLibrary'
import 'antd/dist/antd.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <>
        <Head>
          <title>Formula Stocks</title>
        </Head>
        <Layout>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} apolloClient={apolloClient} />
          </ApolloProvider>
        </Layout>
      </>
    )
  }
}

export default withApolloClient(MyApp)
