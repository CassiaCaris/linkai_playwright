import { expect, test } from '@playwright/test'

import { removeUserByEmail } from '../support/database'

const baseUrl = 'http://localhost:3333'

test('Deve exibir oos meus links no meu perfil', async ({ page, request }) => {

    const jobs = {
        name: 'Steve Jobs',
        email: 'jobs@apple.com',
        username: 'stevejobs',
        bio: '',
        password: 'pwd123'
    }

    await removeUserByEmail(jobs.email)

    const response = await request.post(`${baseUrl}/api/auth/register`, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: jobs
    })

    expect(response.status()).toBe(201)

    const { token } = await response.json()

    console.log(token)

    //cadastro do links com o usuário acima
    const response2 = await request.post(`${baseUrl}/api/links`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            "name": "Meu Blog",
            "url": "https://blog.jobs.com"
        }
    })

    expect(response2.status()).toBe(201)


    //cadastro do GitHub
    const response3 = await request.post(`${baseUrl}/api/socials`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            "platform": "GitHub",
            "username": "stevejobsdev"
        }
    })

    expect(response3.status()).toBe(201)


      //cadastro do LinkedIn
    const response4 = await request.post(`${baseUrl}/api/socials`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            "platform": "LinkedIn",
            "username": "stevejobs"
        }
    })

    expect(response4.status()).toBe(201)
    

      //cadastro do Instagram
    const response5 = await request.post(`${baseUrl}/api/socials`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: {
            "platform": "Instagram",
            "username": "stevejobs"
        }
    })

    expect(response5.status()).toBe(201)


})

