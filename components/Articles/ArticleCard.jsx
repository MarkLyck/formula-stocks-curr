import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import { Card, Title, HeaderImage } from './styles'

const ArticleCard = ({ article }) => {
  if (!Router.router.pathname || !article.title) return null
  const articleURLName = article.title.split(' ').join('-')
  const articleLink = location.pathname.includes('dashboard')
    ? `/dashboard/articles/article?title=${articleURLName}`
    : `/articles/article?title=${articleURLName}`

  return (
    <Link href={articleLink}>
      <a>
        <Card>
          <HeaderImage data-headerimageurl={article.headerImageUrl} />
          <Title>{article.title}</Title>
        </Card>
      </a>
    </Link>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object,
}

export default ArticleCard
