// import * as React from 'react'
import UiInput from 'src/components/UiInput'
import * as S from './HomePage.style'
import UiButton from 'src/components/UiButton/UiButton'

const HomePage = () => {
  return (
    <S.PageWrapper>
      <S.PageHeader>Gitting your interests...</S.PageHeader>
      <S.SubWrapper>
        <UiInput />
        <UiButton />
      </S.SubWrapper>
    </S.PageWrapper>
  )
}

export default HomePage
