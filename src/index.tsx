import { Html, PropsWithChildren } from '@kitajs/html'
import { html } from '@elysiajs/html'
import Elysia from 'elysia'
import { YikesPage } from './components/yikes-page.tsx'
import { BaseHtml } from './components/base-html.tsx'
import { config } from './config.ts'

const app = new Elysia()
    .use(html())
    .get('/', ({ set }) => {
        set.redirect = '/bork'
    })
    .get('/oof', () => (
        <BaseHtml>
            <YikesPage
                pageTitle="This is the Oof Page"
                imageColor="bg-red-500"
                imagePosition="left"
            />
        </BaseHtml>
    ))
    .get('/boof', () => (
        <BaseHtml>
            <YikesPage
                pageTitle="This is the Boof Page"
                imageColor="bg-green-500"
                imagePosition="center"
            />
        </BaseHtml>
    ))
    .get('/bork', () => (
        <BaseHtml>
            <YikesPage
                pageTitle="This is the Bork Page"
                imageColor="bg-yellow-500"
                imagePosition="right"
            />
        </BaseHtml>
    ))
    .get('/tailwind.css', () => Bun.file('./tailwind-gen/tailwind.css'))
    .listen(config.PORT)

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
