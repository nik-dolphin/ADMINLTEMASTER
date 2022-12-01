export const loginUser = (token, item) => {

  return {
      type: 'ADMINLTE_LOGIN_USER',
      authToken:token,
      loginUser:item,
  }
}

export const logoutUser = () => {
  return {
    type: 'ADMINLTE_LOGOUT_USER'
  }
}

export const sidebarWidth = (sideWidth, title, topNavbarWidth) => {
  return {
    type: 'SIDEBAR_WIDTH',
    width: sideWidth,
    title: title,
    topNavbarWidth: topNavbarWidth
  }
}