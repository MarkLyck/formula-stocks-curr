import { css } from '@emotion/core'
import styled from '@emotion/styled'
import mq from '~/common/utils/mq'
import Beside from '~/ui-components/Section/Beside'
import Box from '~/ui-components/Box'

export const BesideContainer = styled.div`
  ${Beside} {
    ${mq.medium(css`
            flex-direction: column;
            > div {
                max-width: 100%;
                margin 0;
            }
            > div:first-of-type {
                margin-bottom: 32px;
            }
	    `)};
  }
`

export const Card = styled(Box)`
  height: 72px;
  width: 100%;
  margin-bottom: 16px;
  transition: transform 0.2s ease-out;
  p {
    color: ${(props) => props.theme.colors.primary};
  }
  &:hover {
    transform: scale(1.05);
  }
`

export const Subtitle = styled.h3`
  font-weight: 500;
  margin-bottom: 16px;
`

export const ProfileImg = styled.img`
  height: 100%;
  width: auto;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-right: 12px;
`

export const ProfileTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 8px;
`

export const SocialMediaLink = styled.a`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.polar};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }
`
