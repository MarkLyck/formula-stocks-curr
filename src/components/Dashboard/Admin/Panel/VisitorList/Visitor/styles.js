import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const countryStyle = css`
  display: flex;
  height: 48px;
  align-items: center;
`

export const CountryName = styled.p`
  margin-left: 8px;

  @media (max-width: 800px) {
    display: none;
  }
`

export const DeviceTableCell = styled.td`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px;
  boxsizing: border-box;
`

export const Icon = styled.img`
  height: 24px;
  width: auto;
  margin: 0 2px;
`
