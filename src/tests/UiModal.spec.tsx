import UiModal from 'src/components/UiModal/UiModal';
import { render, screen } from '@testing-library/react'
import {describe, test} from 'vitest';

describe("Accordion test", () => {
    test("Should show title", () => {
        render(<UiModal children="Testing" />);
        expect(screen.getByText("Testing")).toBeDefined()
    })
})