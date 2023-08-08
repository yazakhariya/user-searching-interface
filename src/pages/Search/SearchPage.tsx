import * as React from 'react'
import UiInput from 'src/components/UiInput'
import * as S from './SearchPage.style'
import UiButton from 'src/components/UiButton/UiButton'
import logo from '/src/assets/icons/logo.svg'
// import NotFound from '../NotFound'
import SearchResult from './components/SearchResult'

const SearchPage = () => {
  const [searchTerms, setSearchTerms] = React.useState<string>('')
  return (
    <S.PageWrapper>
      <S.SearchContainer>
        <S.ImageWrapper>
          <img width="170px" src={logo} />
        </S.ImageWrapper>
        <S.SearchBarWrapper>
          <UiInput
            value={searchTerms}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          <UiButton />
        </S.SearchBarWrapper>
      </S.SearchContainer>
      {searchTerms === '' ? (
        <S.EmptyResultsMessage>Никаких результатов...</S.EmptyResultsMessage>
      ) : (
        <SearchResult username={searchTerms} />
      )}
    </S.PageWrapper>
  )
}

export default SearchPage
