import logo from '/src/assets/icons/logo.svg'
import UiInput from 'src/components/UiInput'
import * as S from './HomePage.style'
import UiButton from 'src/components/UiButton/UiButton'

const HomePage = () => {
  return (
    <S.PageWrapper>
      <S.PageLogo><img width="270px" src={logo} /></S.PageLogo>
      <S.SubWrapper>
        <UiInput />
        <UiButton />
      </S.SubWrapper>
    </S.PageWrapper>
  )
}

export default HomePage
