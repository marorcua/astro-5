/** @format */

// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  root: './src',
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
  }
})
