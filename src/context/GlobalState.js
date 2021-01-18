import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
   transactions: [],
}

import { addTransaction, deleteTransaction } from './Actions'

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   return (
      <GlobalContext.Provider
         value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            dispatch
         }}>
         {children}
      </GlobalContext.Provider>
   )
}
