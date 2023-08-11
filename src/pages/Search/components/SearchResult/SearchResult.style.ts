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
  border: solid 1px #015e25;
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
  border: solid 1px #015e25;
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
