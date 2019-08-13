import { RESET, ADD } from "../constant"

export const initialState = { count: 0 }

export function reducer (state = initialState, action) {
  switch (action.type) {
    case RESET: 
      return initialState
    case ADD:
      return { count: state.count + 1 }
    default: 
      return state
  }
}
