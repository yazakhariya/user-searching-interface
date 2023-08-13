import * as S from './NotFound.style'
import loader from '/src/assets/icons/loader.svg'

const NotFound = () => {
  return (
    <S.PageWrapper>
      <span>Ой... страница не найдена</span>
      <img width="100px" src={loader} />
    </S.PageWrapper>
  )
}

export default NotFound
