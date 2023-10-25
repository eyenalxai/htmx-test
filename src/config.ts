import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const config = createEnv({
    server: {
        PORT: z.number({
            coerce: true,
        }),
    },
    runtimeEnv: process.env,
})
