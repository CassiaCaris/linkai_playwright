import { test, expect } from '@playwright/test'

import { getAuthActions } from '../support/actions/auth'
import { getLinkActions } from '../support/actions/link'
import { getToast } from '../support/actions/components/Toast'

import { User, getUserwithLink, getUserwithLinks } from '../support/fixtures/User'
import { insertUser, removeUserByUsername, removeLinks } from '../support/database'

test('deve cadastrar um novo link', async ({ page }) => {

    const auth = getAuthActions(page)
    const link = getLinkActions(page)
    const toast = getToast(page)

    const user: User = getUserwithLink()
    await removeUserByUsername(user.username)
    await insertUser(user)

    await removeLinks('camila.dev')

    await auth.navigatoToLogin()
    await auth.doLogin(user)

    if (user.links) {
        for (const l of user.links) {
            await link.openModal()
            await link.submitLinkForm(l)
            await toast.haveText('Sucesso!', 'Link adicionado com sucesso.')
        }
    }
})

test('deve cadastrar mutiplos links', async ({ page }) => {

    const auth = getAuthActions(page)
    const link = getLinkActions(page)
    const toast = getToast(page)

    const user: User = getUserwithLinks()
    await removeUserByUsername(user.username)
    await insertUser(user)

    await removeLinks('elton.dev')

    await auth.navigatoToLogin()
    await auth.doLogin(user)
    if (user.links) {
        for (const l of user.links) {
            await link.openModal()
            await link.submitLinkForm(l)
            await toast.haveText('Sucesso!', 'Link adicionado com sucesso.')
        }
    }
})