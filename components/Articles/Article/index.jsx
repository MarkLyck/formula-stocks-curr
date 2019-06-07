import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Router from 'next/router'
import Loader from 'ui-components/Loader'
import LoadingError from 'ui-components/Error/LoadingError'
import { ArticleContainer, HeaderImage, Title, Body } from './styles'

const ARTICLE_QUERY = gql`
  query ArticleQuery($title: String) {
    allArticles(filter: { title: $title }) {
      title
      body
      headerImageUrl
    }
  }
`

const Article = () => (
  <Query query={ARTICLE_QUERY} variables={{ title: Router.router.query.title.split('-').join(' ') }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />
      if (error || !data.allArticles[0]) return <LoadingError />

      const article = data.allArticles[0]

      return (
        <ArticleContainer>
          <HeaderImage data-headerimageurl={article.headerImageUrl} />
          <Title>{article.title}</Title>
          <Body dangerouslySetInnerHTML={{ __html: article.body }} />
        </ArticleContainer>
      )
    }}
  </Query>
)

export default Article
