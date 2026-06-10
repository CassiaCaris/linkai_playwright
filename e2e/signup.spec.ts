import { test, expect } from '@playwright/test'

import { getSignupPage } from '../support/pages/SignupPage'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'

import { User } from '../support/fixtures/User'

test('deve cadastrar um novo usuário com sucesso', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const dashPage = getDashPage(page)
    const toast = getToast(page)

    const user: User = {
        name: 'Cassia Caris',
        username: 'caris',
        email: 'caris@link.ai',
        password: 'pwd123'
    }

    await signupPage.open()
    await signupPage.submit(user)

    await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}! 👋`)
    await expect(toast.element()).toContainText('Conta criada com sucesso!')
    await expect(toast.element()).toContainText('Bem-vindo ao Linkaí. Agora você pode criar seu perfil.');
});