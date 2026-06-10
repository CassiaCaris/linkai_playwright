export interface User {
    name?: string,
    username: string,
    password: string
}

export const Users = {
  success: {
    name: 'Cassia',
    username: 'cassia',
    password: 'pwd123'
  },

  invalidPassword: {
    username: 'cassia',
    password: '123456'
  },

  unregisteredUser: {
    username: 'Paulo',
    password: '123456'
  },

  emptyFields: {
    username: '',
    password: ''
  },

  emptyUsername: {
    username: '',
    password: '123456'
  },

  emptyPassword: {
    username: 'cassia',
    password: ''
  }
}