import * as React from 'react'
import UiInput from 'src/components/UiInput'
import * as S from './SearchPage.style'
import UiButton from 'src/components/UiButton/UiButton'
import logo from '/src/assets/icons/logo.svg'
import SearchResult from './components/SearchResult'

const SearchPage = () => {
  const [searchTerms, setSearchTerms] = React.useState<string>('')
  const [order, setOrder] = React.useState<string>('desc')

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
            placeholder="Введите поисковый запрос..."
          />
          <UiButton children="Больше repos" onClick={() => setOrder('desc')} />
          <UiButton children="Меньше repos" onClick={() => setOrder('asc')} />
        </S.SearchBarWrapper>
      </S.SearchContainer>
      {searchTerms === '' ? (
        <S.EmptyResultsMessage>Никаких результатов...</S.EmptyResultsMessage>
      ) : (
        <SearchResult order={order} username={searchTerms} />
      )}
    </S.PageWrapper>
  )
}

export default SearchPage
