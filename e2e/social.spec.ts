import { test } from '@playwright/test'

import { getAuthActions } from '../support/actions/auth'
import { getToast } from '../support/actions/components/Toast'

import { getUserwithSocialMedia } from '../support/fixtures/User'
import { getSocialActions } from '../support/actions/social'

import { insertUser, removeUserByUsername } from '../support/database'

test.describe.serial('Redes Sociais', () => {

    test('deve poder cadastrar o github', async ({ page }) => {

        const auth = getAuthActions(page)
        const social = getSocialActions(page)
        const toast = getToast(page)

        const user = getUserwithSocialMedia()
        await removeUserByUsername(user.username)
        await insertUser(user)

        await auth.navigatoToLogin()
        await auth.doLogin(user)
        await auth.verifyUserLogin(user)

        await social.addSocialMedia('GitHub', user.socialMedia.github)

        await toast.haveText('Sucesso!', 'GitHub adicionado com sucesso')
    })

    test('deve poder cadastrar o LinkedIn', async ({ page }) => {

        const auth = getAuthActions(page)
        const social = getSocialActions(page)
        const toast = getToast(page)

        const user = getUserwithSocialMedia()
        await removeUserByUsername(user.username)
        await insertUser(user)

        await auth.navigatoToLogin()
        await auth.doLogin(user)
        await auth.verifyUserLogin(user)

        await social.addSocialMedia('LinkedIn', user.socialMedia.linkedin)

        await toast.haveText('Sucesso!', 'LinkedIn adicionado com sucesso')
    })

    test('deve poder cadastrar o Instagram', async ({ page }) => {

        const auth = getAuthActions(page)
        const social = getSocialActions(page)
        const toast = getToast(page)

        const user = getUserwithSocialMedia()
        await removeUserByUsername(user.username)
        await insertUser(user)

        await auth.navigatoToLogin()
        await auth.doLogin(user)
        await auth.verifyUserLogin(user)

        await social.addSocialMedia('Instagram', user.socialMedia.instagram)

        await toast.haveText('Sucesso!', 'Instagram adicionado com sucesso')
    })

})