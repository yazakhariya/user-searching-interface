import * as React from 'react'
import * as S from './SearchResult.style'
import { Props, Result } from './types'
import UiModal from 'src/components/UiModal/UiModal'
import { Link } from 'react-router-dom'
import { useGetUserByNameQuery } from 'src/api/api'
import prev from 'src/assets/icons/prev.svg'
import next from 'src/assets/icons/next.svg'

const SearchResult = ({ username, order }: Props) => {
  const [page, setPage] = React.useState<number>(1)

  const { data, error, isLoading} = useGetUserByNameQuery({
    username,
    order,
    page,
  })

  const [userUrl, setUserUrl] = React.useState<string>('')
  const [userModal, setUserModal] = React.useState<boolean | null>(null)

  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setUserModal(true)
    const user = data?.items?.filter(
      (item: { login: string }) =>
        item.login === (event.target as HTMLElement).textContent
    )
    setUserUrl(user[0].html_url)
  }

  const userUrlContent = userModal ? (
    <UiModal closeModalFn={() => setUserModal(null)}>
      <S.UserContentWrapper>
        <span>
          С профилем данного пользавателя вы ознакомитесь, перейдя по ссылке:{' '}
          <Link to={userUrl}>{userUrl}</Link>
        </span>
      </S.UserContentWrapper>
    </UiModal>
  ) : null

  return (
    <S.ResultContainer>
      {data && error ? (
        <S.Pagination>
          <S.Img
            type="image"
            src={prev}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          />
          <S.PageNumber>{page}</S.PageNumber>
          <S.Img
            type="image"
            src={next}
            onClick={() => setPage(page + 1)}
            disabled={page === data.length}
          />
        </S.Pagination>
      ) : null}
      {isLoading ? (
        <S.Loading>Ищу...</S.Loading>
      ) : (
        data?.items
          ?.filter((item: { login: string }) =>
            item.login.toLowerCase().includes(username.toLowerCase())
          )
          .map((result: Result, index: number) => {
            return (
              <S.Item onClick={(event) => handleUserClick(event)} key={index}>
                <S.Avatar src={result.avatar_url} />
                {result.login}
              </S.Item>
            )
          })
      )}
      {error && 'status' in error ? (
        <S.Error>
          Кажется, возникла ошибка - {error.status}. Попробуйте позже.
        </S.Error>
      ) : null}
      {userUrlContent ? userUrlContent : null}
    </S.ResultContainer>
  )
}

export default SearchResult
