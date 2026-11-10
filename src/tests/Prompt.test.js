import { describe, it, expect } from 'vitest'
import { Prompt}  from '../classes/Prompt'

describe('Prompt', () => {
  it('player answer to be empty upon initialization', () => {
    const prompt = new Prompt("hello", "world", "category", "", false)   // Arrange
    expect(prompt.playerAnswer).toBe("")        
  })
})

describe('Prompt', () => {
  it('player answer to be updated correctly', () => {
    const prompt = new Prompt("hello", "world", "category", "", false)   // Arrange
    prompt.updatePlayerAnswer("new answer") // Act
    expect(prompt.playerAnswer).toBe("new answer") // Assert
  })
})

describe('Prompt', () => {
  it('player answer to be cleared correctly', () => {
    const prompt = new Prompt("hello", "world", "category", "some answer", false)   // Arrange
    prompt.clearPlayerAnswer() // Act
    expect(prompt.playerAnswer).toBe("") // Assert
  })
}) 

describe('Prompt', () => {
  it('isCompleted to be marked as true correctly', () => {
    const prompt = new Prompt("hello", "world", "category", "", false)   // Arrange
    prompt.markCompleted() // Act
    expect(prompt.isCompleted).toBe(true) // Assert
  })
})