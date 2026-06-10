import { faker } from '@faker-js/faker'

export interface User {
  name?: string
  username: string
  password: string
  email: string
}

export function getNewUser() {
  return {
    name: faker.person.fullName(),
    username: faker.internet.username().replace('.', ''),
    email: faker.internet.email(),
    password: 'pwd123'
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