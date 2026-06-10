import { faker } from '@faker-js/faker'

export interface UserSignup {
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface UserLogin {
  name: string
  username: string
  password: string
}

export function getNewUser() {

  const defaultPassword = 'pwd123'
  
  return {
    name: faker.person.fullName(),
    username: faker.internet.username().replace('.', ''),
    email: faker.internet.email(),
    password: defaultPassword,
    confirmPassword: defaultPassword
  }
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