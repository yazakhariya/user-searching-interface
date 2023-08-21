import { styled } from 'styled-components'

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  cursor: pointer;
  margin: 10px 30px;
  color: #015e25;
  font-weight: bold;
  font-size: 20px;
  border: solid 1px #000000;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  &&:hover {
    color: #000000;
  }
`

export const Loading = styled.h2`
  padding: 50px 50px;
  color: #015e25;
`

export const Avatar = styled.img`
  width: 40px;
  border-radius: 15px;
`

export const UserContentWrapper = styled.div`
  border-radius: 12px;
  background-color: #e6eede;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 36px 42px 44px;
  position: relative;
`

export const Pagination = styled.div`
  padding: 10px 50px;
  display: flex;
  gap: 5px;
`

export const Img = styled.input`
  width: 25px;
`

export const PageNumber = styled.span`
  width: 50px;
  border-radius: 15px;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Error = styled.h3`
  padding: 50px 50px;
  color: #015e25;
`

export const EmptyResultsMessage = styled.h2`
  padding: 50px 50px;
  color: #015e25;
`
