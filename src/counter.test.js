import { describe, expect, it } from 'vitest'

import { setupCounter } from './counter.js'

describe('setupCounter', () => {
  it('initializes the counter and increments it on every click', () => {
    const button = document.createElement('button')

    setupCounter(button)

    expect(button.innerHTML).toBe('Count is 0')

    button.click()
    button.click()

    expect(button.innerHTML).toBe('Count is 2')
  })
})
