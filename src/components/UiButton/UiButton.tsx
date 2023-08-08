import * as S from './UiButton.style'

type Props = {
  onClick?: () => void
}

const UiButton = ({onClick}: Props) => {
  return <S.Button onClick={onClick}>Поиск</S.Button>
}

export default UiButton
