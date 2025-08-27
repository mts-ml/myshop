import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import userEvent from '@testing-library/user-event' 

import { Counter } from './Counter'


test("should render counter with initial value of 0", () => {
   render(<Counter />)
   
   const counterElement = screen.getByRole('heading', { level: 2 })
   
   expect(counterElement).toHaveTextContent('0')
})

test("should render increase button", () => {
   render(<Counter />)
   
   const increaseButton = screen.getByText('+')
   
   expect(increaseButton).toBeInTheDocument()
})

test("should render decrease button", () => {
   render(<Counter />)
   
   // Usando o aria-label completo (nome acessível correto)
   const decreaseButton = screen.getByRole('button', { name: 'Clique para diminuir contagem para -1' })
   
   expect(decreaseButton).toHaveTextContent('-')
})

test("should increase counter value when increase button is clicked", async () => {
   render(<Counter />)

   const counterValue = screen.getByRole("heading", { level: 2 })   
   const increaseButton = screen.getByRole('button', { 
      name: /Clique para aumentar contagem para/ 
   })

   expect(counterValue).toHaveTextContent('0')   
   await userEvent.click(increaseButton)   
   expect(counterValue).toHaveTextContent('1')
})
