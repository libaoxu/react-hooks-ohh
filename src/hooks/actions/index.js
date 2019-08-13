import { RESET } from "../constant"

export const resetData = payload => (dispatch, getState) => {
  dispatch({ type: RESET, payload })
}
