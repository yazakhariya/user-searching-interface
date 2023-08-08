import * as S from './UiInput.style'

type Props = {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UiInput = ({ value, onChange }: Props) => {
  return <S.Input value={value} onChange={onChange} placeholder='Введите поисковый запрос...' type='search' />
}

export default UiInput
