/** @format */

// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },

  // root: '.',
  output: 'server',

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        access: 'public',
        context: 'server'
        // default: true
      }),
      SCORE_API_ENDPOINT: envField.string({
        access: 'public',
        context: 'server'
      })
    }
  },

  adapter: vercel()
})
