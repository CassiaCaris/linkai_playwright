import { test, expect } from '@playwright/test'

import { getLoginPage } from '../support/pages/LoginPage'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'

import { UserLogin, Users } from '../support/fixtures/User'

test('deve efetuar login com sucesso', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const dashPage = getDashPage(page)
    const toast = getToast(page)

    const user: UserLogin = Users.success

    await loginPage.open()
    await loginPage.submit(user)

    await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}! 👋`)
    await expect(toast.element()).toContainText('Login realizado com sucesso!')
    await expect(toast.element()).toContainText('Bem-vindo de volta ao Linkaí.');
});

test('não deve logar com senha incorreta', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user: UserLogin = Users.invalidPassword

    await loginPage.open()
    await loginPage.submit(user)

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
    // await page.getByLabel('Notifications (F8)').getByText('Algo deu errado com seu login').click();
});

test('não deve logar com usuário não cadastrado', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user: UserLogin = Users.unregisteredUser

    await loginPage.open()
    await loginPage.submit(user)

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
});

test('não deve logar quando não informo nenhum dos campos', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user: UserLogin = Users.emptyFields

    await loginPage.open()
    await loginPage.submit(user)

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.');
});

test('não deve logar quando não informo o usuário', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user: UserLogin = Users.emptyUsername

    await loginPage.open()
    await loginPage.submit(user)

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.');
});

test('não deve logar quando não informo a senha', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user: UserLogin = Users.emptyPassword

    await loginPage.open()
    await loginPage.submit(user)

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.');
});