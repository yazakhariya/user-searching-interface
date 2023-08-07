import UiInput from 'src/components/UiInput'
import * as S from './SearchPage.style'
import UiButton from 'src/components/UiButton/UiButton'
import logo from '/src/assets/icons/logo.svg'

//TODO search funcs

const SearchPage = () => {
  return (
    <S.PageWrapper>
      <S.ImageWrapper>
        <img width="170px" src={logo} />
      </S.ImageWrapper>
      <S.SearchBarWrapper>
        <UiInput />
        <UiButton />
      </S.SearchBarWrapper>
      <S.ResultContainer>
        {/* //maping */}
      </S.ResultContainer>
    </S.PageWrapper>
  )
}

export default SearchPage
