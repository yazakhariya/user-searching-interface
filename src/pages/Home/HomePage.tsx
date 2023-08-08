import logo from '/src/assets/icons/logo.svg'
import UiInput from 'src/components/UiInput'
import * as S from './HomePage.style'
import UiButton from 'src/components/UiButton/UiButton'
import { useNavigate } from 'react-router-dom'

// TODO переход на страницу поиска с значением 

const HomePage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => { 
    navigate('/search')
  }

  return (
    <S.PageWrapper>
      <S.PageLogo>
        <img width="270px" src={logo} />
      </S.PageLogo>
      <S.SubWrapper>
        <UiInput />
        <UiButton onClick={handleSubmit} />
      </S.SubWrapper>
    </S.PageWrapper>
  )
}

export default HomePage
