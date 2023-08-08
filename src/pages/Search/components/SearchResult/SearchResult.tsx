import * as React from 'react'
import * as S from './SearchResult.style'
import { Props, Result } from './types'

//TODO: 1. пагинация; 2.типизация; 3.показ инф по клику на айтем.

const SearchResult = ({ username }: Props) => {
  const [results, setResults] = React.useState(Array(0))
  const [loading, isLoading] = React.useState<boolean>(false)

  const baseUrl = `https://api.github.com/search/users?q=`

  React.useEffect(() => {
    isLoading(true)
    fetch(`${baseUrl}${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        isLoading(false)
        setResults(data)
      })
      .catch((err) => {
        isLoading(false)
        console.log(err.message)
      })
  }, [baseUrl, username])

  console.log(results)

  return (
    <S.ResultContainer>
      {loading ? (
        <S.Loading>Ищу...</S.Loading>
      ) : (
        results.items
          ?.filter((item: { login: string }) =>
            item.login.toLowerCase().includes(username.toLowerCase())
          )
          .map((result: Result, index: number) => {
            return <S.Item key={index}><S.Avatar src={result.avatar_url} />{result.login}</S.Item>
          })
      )}
    </S.ResultContainer>
  )
}

export default SearchResult
