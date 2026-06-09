import { test, expect } from '@playwright/test'

test('deve efetuar login com sucesso', async ({ page }) => {
    const user = {
        name: 'Cassia',
        username: 'cassia',
        password: 'pwd123'
    }
    await page.goto('http://localhost:3000/login')

    await page
        .getByRole('textbox', { name: 'Seu @username incrível' })
        .fill(user.username)

    await page
        .getByRole('textbox', { name: 'Digite sua senha secreta' })
        .fill(user.password)

    await page
        .getByRole('button', { name: 'Entrar' })
        .click()

    await expect(page.locator('h1')).toContainText(`Olá, ${user.name}! 👋`)
});

test('não deve logar com senha incorreta', async ({ page }) => {
    const user = {
        username: 'cassia',
        password: '123456'
    }
    await page.goto('http://localhost:3000/login')

    await page
        .getByRole('textbox', { name: 'Seu @username incrível' })
        .fill(user.username)

    await page
        .getByRole('textbox', { name: 'Digite sua senha secreta' })
        .fill(user.password)

    await page
        .getByRole('button', { name: 'Entrar' })
        .click()

    const toast = page.locator('.toast')

    await expect(toast).toContainText('Oops!')
    await expect(toast).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
    // await page.getByLabel('Notifications (F8)').getByText('Algo deu errado com seu login').click();
});

test('não deve logar com usuário não cadastrado', async ({ page }) => {
    const user = {
        username: 'Paulo',
        password: '123456'
    }
    await page.goto('http://localhost:3000/login')

    await page
        .getByRole('textbox', { name: 'Seu @username incrível' })
        .fill(user.username)

    await page
        .getByRole('textbox', { name: 'Digite sua senha secreta' })
        .fill(user.password)

    await page
        .getByRole('button', { name: 'Entrar' })
        .click()

    const toast = page.locator('.toast')

    await expect(toast).toContainText('Oops!')
    await expect(toast).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
});