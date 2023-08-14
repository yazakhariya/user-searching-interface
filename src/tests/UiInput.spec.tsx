import { render, screen } from '@testing-library/react'
import UiInput from 'src/components/UiInput'

describe('<UiInput />', () => {
  it('to be in document and on page', () => {
    render(<UiInput placeholder="Введите поисковый запрос..." />)
    expect(screen.getByPlaceholderText("Введите поисковый запрос...")).toBe
  })
})
