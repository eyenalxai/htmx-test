import { Html } from '@kitajs/html'

const getImagePositionClass = (
    imagePosition: 'left' | 'center' | 'right'
): string => {
    if (imagePosition === 'left') return 'mr-72'

    if (imagePosition === 'right') return 'ml-72'

    if (imagePosition === 'center') return ''

    throw new Error(`Invalid imagePosition: ${imagePosition}`)
}

export const YikesPage = ({
    pageTitle,
    imageColor,
    imagePosition,
}: {
    pageTitle: string
    imageColor: string
    imagePosition: 'left' | 'center' | 'right'
}) => {
    const imagePositionClass = getImagePositionClass(imagePosition)

    return (
        <body
            class="flex w-full h-screen justify-center items-center flex-col bg-slate-50 dark:bg-slate-800"
            hx-boost="true"
            hx-ext="preload"
        >
            <h1 class="text-3xl text-slate-800 dark:text-slate-50">
                {pageTitle}
            </h1>
            <div
                class={`w-20 h-20 mt-10 ${imagePositionClass} ${imageColor}`}
                style={'view-transition-name: box'}
            ></div>
            <div class="mt-10 m-4">
                <a
                    href="/oof"
                    class="mr-10 text-blue-500 hover:underline text-xl"
                    preload="mouseover"
                >
                    Go to Oof
                </a>
                <a
                    href="/boof"
                    class="mr-10 text-blue-500 hover:underline text-xl"
                    preload="mouseover"
                >
                    Go to Boof
                </a>
                <a
                    href="/bork"
                    class="text-blue-500 hover:underline text-xl"
                    preload="mouseover"
                >
                    Go to Bork
                </a>
            </div>
        </body>
    )
}
