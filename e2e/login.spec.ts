import { test, expect } from '@playwright/test'

import { getLoginPage } from '../support/pages/LoginPage'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'

test('deve efetuar login com sucesso', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const dashPage = getDashPage(page)
    const toast = getToast(page)

    const user = {
        name: 'Cassia',
        username: 'cassia',
        password: 'pwd123'
    }

    await loginPage.open()
    await loginPage.submit(user.username, user.password)

    await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}! 👋`)
    await expect(toast.element()).toContainText('Login realizado com sucesso!')
    await expect(toast.element()).toContainText('Bem-vindo de volta ao Linkaí.');
});

test('não deve logar com senha incorreta', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user = {
        username: 'cassia',
        password: '123456'
    }

    await loginPage.open()
    await loginPage.submit(user.username, user.password)

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
    // await page.getByLabel('Notifications (F8)').getByText('Algo deu errado com seu login').click();
});

test('não deve logar com usuário não cadastrado', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user = {
        username: 'Paulo',
        password: '123456'
    }

    await loginPage.open()
    await loginPage.submit(user.username, user.password)

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
});

test('não deve logar quando não informo nenhum dos campos', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    const user = {
        username: '',
        password: ''
    }

    await loginPage.open()
    await loginPage.submit(user.username, user.password)

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.');
});