import { it, expect, describe, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import UiButton from 'src/components/UiButton/UiButton'

describe('<UiButton />', () => {
  describe('Callbacks tests', () => {
    it('should call `onClick` prop', () => {
      const cb = vi.fn()
      render(<UiButton onClick={cb} children="Больше repos" />)
      fireEvent.click(screen.getByText("Больше repos"))
      expect(cb).toBeCalledTimes(1)
    })
  })
})
