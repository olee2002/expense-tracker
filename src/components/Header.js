import { React } from 'react'

function Header() {
   return (
      <div className='header-container'>
         Expense Report
         <a
            className='footer'
            href='https://my-expense-report.netlify.app/'
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
