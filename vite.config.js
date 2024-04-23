import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/selo_public_mui_firebase/.",
  plugins: [react()],

  // server: {
  //   https: true
  // }
})
