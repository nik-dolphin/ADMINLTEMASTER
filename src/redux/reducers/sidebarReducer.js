const initialState = {
  width: '250px',
  title: 'block'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIDEBAR_WIDTH':
      return {
        width: action.width,
        title: action.title
      }
  
    default:
      return state
  }
}

export default reducer;