import { render, screen } from '@testing-library/react'
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
})
