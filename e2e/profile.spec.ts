import { test } from '@playwright/test'

import { removeUserByEmail } from '../support/database'

import { createFullProfile } from '../support/services'

test('Deve exibir oos meus links no meu perfil', async ({ request }) => {

    const profile = {
        user: {
            name: 'Steve Jobs',
            email: 'jobs@apple.com',
            username: 'stevejobs',
            bio: '',
            password: 'pwd123'
        },
        links: [
            {
                name: 'Meu Blog',
                url: 'https://blog.apple.com'
            },
            {
                name: 'Apple',
                url: 'https://www.apple.com'
            },
            {
                name: 'Pixar',
                url: 'https://www.pixar.com'
            },
            {
                name: 'Stanford',
                url: 'https://www.stanford.edu'
            },
            {
                name: 'TED Talk',
                url: 'https://www.ted.com/talks/steve_jobs_how_to_live_before_you_die'
            }
        ],
        socials: {
            github: {
                platform: 'GitHub',
                username: 'stevejobsdev'
            },
            linkedin: {
                platform: 'LinkedIn',
                username: 'stevejobs'
            },
            instagram: {
                platform: 'Instagram',
                username: 'stevejobs'
            }
        }
    }

    await removeUserByEmail(profile.user.email)
    await createFullProfile(request, profile)
})
