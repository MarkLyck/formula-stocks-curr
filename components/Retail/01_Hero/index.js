import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import Typed from 'typed.js'
import { Element } from 'react-scroll'
import { HeroContainer, Content, Title, SliderImage, Overlay, Bold } from './styles'
import Slider from 'react-slick'

class Hero extends Component {
  preStringTyped = arrPos => this.slider.slickGoTo(arrPos)

  componentDidMount() {
    const { portfolioReturn, winRatio } = this.props

    const strings = [
      `^1+${Math.floor(portfolioReturn)}% capital growth since 2009`,
      `^1+${Math.floor(winRatio)}% win ratio`,
      '^1Less risk',
      '^1Easy to use',
      '^1Lower costs',
      '^1Achieve your goals',
    ]

    const options = {
      strings,
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 5000,
      loop: true,
      preStringTyped: this.preStringTyped,
    }

    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  slickSettings = {
    focusOnSelect: false,
    infinite: true,
    fade: true,
    speed: 1500,
    autoplay: false,
    swipe: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  render() {
    return (
      <HeroContainer>
        <Element name="hero" />
        <Content>
          <div className="text-content">
            <Title type="title">
              A <Bold>better</Bold> way to <Bold>invest</Bold>
            </Title>
            <div id="subtitles">
              <div className="type-wrap">
                <p ref={el => (this.el = el)} />
              </div>
            </div>
          </div>
        </Content>
        <Overlay />
        <Slider ref={slider => (this.slider = slider)} {...this.slickSettings}>
          <SliderImage
            css={css`
              background-image: url(/static/images/slides/speedster/speedster.jpg);
              background-image: image-set(
                url(/static/images/slides/speedster/speedster.jpg) 1x,
                url(/static/images/slides/speedster/speedster@2x.jpg) 2x
              );
            `}
          />

          <LazyLoad height="100%" once>
            <SliderImage
              css={css`
                background-image: url(/static/images/slides/target/target.jpg);
                background-image: image-set(
                  url(/static/images/slides/target/target.jpg) 1x,
                  url(/static/images/slides/target/target@2x.jpg) 2x
                );
              `}
            />
          </LazyLoad>

          <LazyLoad height="100%" once>
            <SliderImage
              css={css`
                background-image: url(/static/images/slides/net/net.jpg);
                background-image: image-set(
                  url(/static/images/slides/net/net.jpg) 1x,
                  url(/static/images/slides/net/net@2x.jpg) 2x
                );
              `}
            />
          </LazyLoad>
          <LazyLoad height="100%" once>
            <SliderImage
              css={css`
                background-image: url(/static/images/slides/boat/boat.jpg);
                background-image: image-set(
                  url(/static/images/slides/boat/boat.jpg) 1x,
                  url(/static/images/slides/boat/boat@2x.jpg) 2x
                );
              `}
            />
          </LazyLoad>

          <LazyLoad height="100%" once>
            <SliderImage
              css={css`
                background-image: url(/static/images/slides/family/family.jpg);
                background-image: image-set(
                  url(/static/images/slides/family/family.jpg) 1x,
                  url(/static/images/slides/family/family@2x.jpg) 2x
                );
              `}
            />
          </LazyLoad>
          <LazyLoad height="100%" once>
            <SliderImage
              css={css`
                background-image: url(/static/images/slides/achieveGoals/achieveGoals.jpg);
                background-image: image-set(
                  url(/static/images/slides/achieveGoals/achieveGoals.jpg) 1x,
                  url(/static/images/slides/achieveGoals/achieveGoals@2x.jpg) 2x
                );
              `}
            />
          </LazyLoad>
        </Slider>
      </HeroContainer>
    )
  }
}

Hero.defaultProps = {
  winRatio: 90,
  portfolioReturn: 700,
}

Hero.propTypes = {
  portfolioReturn: PropTypes.number.isRequired,
  winRatio: PropTypes.number,
}

export default Hero
