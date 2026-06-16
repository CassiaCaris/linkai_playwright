import { faker } from '@faker-js/faker'

export interface User {
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export function getFakeUser() {

  const defaultPassword = 'pwd123'
  
  return {
    name: faker.person.fullName(),
    username: faker.internet.username().replace('.', ''),
    email: faker.internet.email(),
    password: defaultPassword,
    confirmPassword: defaultPassword
  }
}

export function getNewUser() {

  const defaultPassword = 'pwd123'
  
  return {
    name: 'Cassia Caris',
    username: 'cassiaCaris',
    email: 'cassiacaris@link.ai',
    password: defaultPassword,
    confirmPassword: defaultPassword
  }
}

export function getDuplicateUser() {

  const defaultPassword = 'pwd123'
  
  return {
    name: 'Antonio',
    username: 'antonio',
    email: 'antonio@link.ai',
    password: defaultPassword,
    confirmPassword: defaultPassword
  }
}

export function getLoginUser() {

  const defaultPassword = '123pwd'
  
  return {
    name: 'Cassia',
    username: 'cassia',
    email: 'cassia@link.ai',
    password: defaultPassword,
    confirmPassword: defaultPassword
  }
}

export function getTempUser() {

  const defaultPassword = 'pwd123'
  
  return {
    name: 'Camila Santos',
    username: 'camila',
    email: 'camila.santos@link.ai',
    password: defaultPassword,
    confirmPassword: defaultPassword
  }
}