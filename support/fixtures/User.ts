import { faker } from '@faker-js/faker'

export interface User {
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
  links?: Link[]
}

export interface Link {
  title: string
  url: string
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

export function getDuplicateUser2() {

  const defaultPassword = 'pwd123'

  return {
    name: 'Joaquim',
    username: 'joaquim',
    email: 'joaquim@link.ai',
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

export function getUserwithLink() {

  const defaultPassword = 'pwd123'

  return {
    name: 'Camila Santos',
    username: 'camila',
    email: 'camila.santos@link.ai',
    password: defaultPassword,
    confirmPassword: defaultPassword,
    links: [{
      title: 'Meus Cursos',
      url: 'https://camila.dev/cursos'
    }]
  }
}

export function getUserwithLinks() {

  const defaultPassword = 'pwd123'

  return {
    name: 'Elton silva',
    username: 'elton',
    email: 'elton@link.ai',
    password: defaultPassword,
    confirmPassword: defaultPassword,
    link: [
      {title: 'Meus Cursos', url: 'https://elton.dev'},
      {title: 'Meus Contato', url: 'https://elton.dev/contato'},
      {title: 'Meus Blog', url: 'https://elton.dev/blog'},
      {title: 'Minhas Playlist', url: 'https://elton.dev/playlist'},
      {title: 'Outros Links', url: 'https://elton.dev/outros-links'}
    ]
  }
}

export function getUserwithSocialMedia() {

  const defaultPassword = 'pwd123'

  return {
    name: 'John Leno',
    username: 'leno',
    email: 'johnleno@link.ai',
    password: defaultPassword,
    confirmPassword: defaultPassword,
    socialMedia: {
      github: 'johnleno',
      linkedin: 'johnleno',
      instagram: 'johnleno'
    }
  }
}