import { render, screen } from "@testing-library/react"
import { describe, expect, it, vitest } from "vitest"
import userEvent from "@testing-library/user-event"

import { Cart } from "./Cart"
import { Product } from "../../data/products"
import { useDispatch } from "react-redux"


const products: Product[] = [
   {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      price: 109.95,
      rating: { count: 120, rate: 3.9 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
   },
   {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description: 'Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.', category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      rating: { rate: 4.1, count: 259 }
   }
]

// Mock: tornar a biblioteca react-redux fake
vitest.mock('react-redux', () => {
   return {
      useDispatch: () => {}
   }
})

describe("Cart > Unit Tests", () => {
   it("should render empty cart correctly", () => {
      render(<Cart showCart={true} handleCartClose={() => { }} cart={[]} />)

      const titleElement = screen.getByRole('heading', { level: 1 })

      expect(titleElement).toHaveTextContent('Cart')
   })

   it('should render total with value 0', () => {
      render(<Cart showCart={true} handleCartClose={() => { }} cart={[]} />)

      const totalElement = screen.getByTestId('total')

      expect(totalElement).toHaveTextContent('Total: $0')
   })

   it('should render empty cart list', () => {
      render(<Cart showCart={true} handleCartClose={() => { }} cart={[]} />)

      const cartList = screen.getByTestId('ul')

      expect(cartList).toBeEmptyDOMElement()
   })

   it('should render a cart with two products', () => {
      render(<Cart showCart={true} handleCartClose={() => { }} cart={products} />)

      const allLiElements = screen.getAllByRole('listitem') //Products

      expect(allLiElements.length).toBe(2)
   })

   it('should render remove button when cart has produtcs', () => {
      render(<Cart showCart={true} handleCartClose={() => { }} cart={products} />)

      const removeBtns = screen.getAllByTestId('remove-btn')

      expect(removeBtns.length).toBeGreaterThan(0)
      expect(removeBtns[0]).toBeInTheDocument()
   })

   it('should remove product when remove button is clicked', async () => {
      render(<Cart showCart={true} handleCartClose={() => { }} cart={products} />)

      const removeButtons = screen.getAllByTestId('remove-btn')
      const removeButton = removeButtons[0]

      await userEvent.click(removeButton)
      expect(removeButtons.length).toBeLessThan(2)
   })
})
