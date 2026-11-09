import { describe, it, expect } from 'vitest'
import { useTyping } from '../hooks/useTyping'
import { renderHook, act } from '@testing-library/react';

describe('useTyping', () => {
  it('should initialize with empty inputValue and isIncorrect false', () => {
    const prompt = { text: "hello" }
    const { inputValue, isIncorrect } = renderHook(() => useTyping(prompt)).result.current
    expect(inputValue).toBe("")
    expect(isIncorrect).toBe(false)
  })
})