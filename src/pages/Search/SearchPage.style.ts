import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: #50a060;
  align-items: flex-start;
  flex-direction: column;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ImageWrapper = styled.div`
  padding: 30px;
`

export const SearchBarWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding-top: 40px;
`

export const EmptyResultsMessage = styled.h2`
  padding: 50px 50px;
  color: #015e25;
`
