import * as S from './UiInput.style'

type Props = {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const UiInput = ({ value, onChange, placeholder }: Props) => {
  return <S.Input value={value} onChange={onChange} placeholder={placeholder} type='search' />
}

export default UiInput
