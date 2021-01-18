import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GlobalProvider } from './context/GlobalState'
import App from './App'

describe('Expense report test', () => {
   beforeEach(() => {
      render(
         <GlobalProvider>
            <App />
         </GlobalProvider>
      )
   })
   it('renders title - Expense Report', () => {
      const title = screen.getByText(/Expense Report/i)
      expect(title).toBeInTheDocument()
   })

   it('renders balance - YOUR BALANCE', () => {
      const balance = screen.getByText(/YOUR BALANCE/i)
      expect(balance).toBeInTheDocument()
   })

   it('adds an expense item', () => {
      const textInput = screen.getByTestId('textInput')
      const numberInput = screen.getByTestId('numInput')
      const submit = screen.getByTestId('submit')
      userEvent.type(textInput, 'Grocery')
      userEvent.type(numberInput, '120')
      userEvent.click(submit)
      const textValue = textInput.getAttribute('value')
      const amountValue = numberInput.getAttribute('value')
      const totalBalance = screen.getByTestId('balance')
      expect(textValue).toBe('Grocery')
      expect(amountValue).toBe('120')
      expect(totalBalance.textContent).toBe("$ 120.00")
   })
})
