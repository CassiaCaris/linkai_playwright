import { test, expect } from '@playwright/test'

import { getSignupPage } from '../support/pages/SignupPage'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'

import { removeUserByEmail, insertUser, removeUserByUsername } from '../support/database'

import { UserSignup, getNewUser, getDuplicateUser } from '../support/fixtures/User'

test('deve cadastrar um novo usuário com sucesso', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const dashPage = getDashPage(page)
    const toast = getToast(page)

    const user: UserSignup = getNewUser()
    await removeUserByEmail(user.email)

    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}! 👋`)
    await expect(toast.element()).toContainText('Conta criada com sucesso!')
    await expect(toast.element()).toContainText('Bem-vindo ao Linkaí. Agora você pode criar seu perfil.');
})

test('não deve cadastrar quando o email já estiver em uso', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

    const user: UserSignup = getDuplicateUser()
    await removeUserByEmail(user.email)
    await insertUser(user)

    await signupPage.open()
    await signupPage.fill({...user, username: 'Carlos'})
    await signupPage.submit()

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Parece que esse e-mail ou nome de usuário já foi cadastrado. Tente outro, por favor.');
})

test('não deve cadastrar quando o username já estiver em uso', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

    const user: UserSignup = getDuplicateUser()
    await removeUserByUsername(user.username)
    await insertUser(user)

    await signupPage.open()
    await signupPage.fill({...user, email: 'carlos@teste.com.br'})
    await signupPage.submit()

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Parece que esse e-mail ou nome de usuário já foi cadastrado. Tente outro, por favor.');
})

test('não deve cadastrar quando nenhum campo é informado', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

    await signupPage.open()
    await signupPage.submit()

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.');
})

test('não deve cadastrar quando o email for incorreto', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

    const user: UserSignup = {
        name: 'Fernando',
        username: 'fernado',
        email: 'www.teste.com.br',
        password: 'pwd123',
        confirmPassword: 'pwd123'
    }

    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await signupPage.ValidateEmailFieldType()
})

test('não deve cadastrar quando o username for incorreto', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

        const user: UserSignup = {
        name: 'Fernando',
        username: 'fernado@@@@___13245',
        email: 'teste@teste.com.br',
        password: 'pwd123',
        confirmPassword: 'pwd123'
    }

    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await expect(toast.element()).toContainText('Username inválido')
    await expect(toast.element()).toContainText('O username deve conter apenas letras, números e underscores.');
})

test('não deve cadastrar quando a senha não são iguais', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

        const user: UserSignup = {
        name: 'Fernando',
        username: 'fernando',
        email: 'teste@teste.com.br',
        password: 'pwd123',
        confirmPassword: '123456'
    }

    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await expect(toast.element()).toContainText('Senhas não coincidem')
    await expect(toast.element()).toContainText('A confirmação de senha deve ser igual à senha.');
})