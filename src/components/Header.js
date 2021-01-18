import { React } from 'react'

function Header() {
   return (
      <div className='header-container'>
         Expense Report
         <a
            className='footer'
            href='https://github.com/olee2002/expense-tracker'
            target='_blank'
            title='GitHub'>
            [
            <img className='img' src='images/github.png' alt='Github' />
            My Github page]
         </a>
      </div>
   )
}

export default Header
