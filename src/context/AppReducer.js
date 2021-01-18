export default (draft, action) => {
   switch (action.type) {
      case 'DELETE_TRANSACTION':
         draft.transactions = draft.transactions.filter(
            (transaction) => transaction.id !== action.payload
         )
         return null

      case 'ADD_TRANSACTION':
         draft.transactions = [...draft.transactions, action.payload]
         return null
      default:
         return draft
   }
}
