/* eslint-disable no-unused-vars */
export const initialState = {
  current: null,
  error: false,
  hourly: null,
  isFetched: false
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    default:
      return state
  }
}
