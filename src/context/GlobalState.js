import React, { createContext, useReducer } from 'react'
import produce from 'immer';

import AppReducer from './AppReducer'

// Initial State
const initialState = {
   transactions: [],
}

import { addTransaction, deleteTransaction } from './Actions'

// Create context
export const GlobalContext = createContext(initialState)

const curriedAppReducer = produce(AppReducer);

// below is what happens under the hood
// const curriedReducerFake = (state, ...arg) => {
//    return produce(state,(draft=>{
//       AppReducer(state, ...arg);
//    }))
// }

// Provider component
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(curriedAppReducer, initialState)

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
