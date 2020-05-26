import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Router from 'next/router'
import Loader from '~/ui-components/Loader'
import LoadingError from '~/ui-components/Error/LoadingError'
import { ArticleContainer, HeaderImage, Title, Body } from './styles'
import { ARTICLE_QUERY } from '~/common/queries'

const Article = () => {
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: {
      title: Router.router.query.title.split('-').join(' '),
    },
  })
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
}

export default Article
