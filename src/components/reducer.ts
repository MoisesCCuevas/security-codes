export const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false
}

// action types
export const ACTIONS = {
  CONFIRM: 'CONFIRM',
  ERROR: 'ERROR',
  CHECK: 'CHECK',
  DELETE: 'DELETE',
  BACK: 'BACK',
  CHANGE_INPUT: 'CHANGE_INPUT'
}

// Reducer if

// const reducer = (state: any, action: any) => {
//   if (action.type === 'ERROR') {
//     return {
//       ...state,
//       error: true,
//       loading: false
//     }
//   }
//   if (action.type === 'CHECK'){
//     return {
//       ...state,
//       loading: true
//     }
//   }
//   ...
// }

// Reducer Switch

// const reducer = (state: typeof initialState, action: any) => {
//   switch(action.type) {
//     case 'ERROR':
//       return {
//         ...state,
//         error: true,
//         loading: false
//       }
//     case 'CHECK':
//       return {
//         ...state,
//         loading: true
//       }
//     default:
//       return {
//         ...state
//       }
//   }
// }

const reducerObject : any = (state: any, payload?: any) => ({
  [ACTIONS.CONFIRM]: {
    ...state,
    error: true,
    loading: false
  },
  [ACTIONS.ERROR]: {
    ...state,
    confirmed: true,
    loading: false
  },
  [ACTIONS.CHECK]: {
    ...state,
    error: false,
    loading: true
  },
  [ACTIONS.DELETE]: {
    ...state,
    deleted: true
  },
  [ACTIONS.BACK]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: ''
  },
  [ACTIONS.CHANGE_INPUT]: {
    ...state,
    value: payload
  }
})

interface action {
  type: string
  payload?: any
}

export const reducer = (state: any, action: action) => {
  // if (reducerObject(state)[action.type]) {
  //   return reducerObject(state, action.payload)[action.type]
  // }
  // return state
  return reducerObject(state, action.payload)[action.type] || state;
}