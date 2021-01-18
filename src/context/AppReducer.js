export default (draft, action) => {
   let state = {}
   switch (action.type) {
      case 'DELETE_TRANSACTION':
         draft.transactions = draft.transactions.filter(
            (transaction) => transaction.id !== action.payload
         )
         return

      case 'ADD_TRANSACTION':
         draft.transactions = [...draft.transactions, action.payload]
         return
      default:
         return state;
   }
}
