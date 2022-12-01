import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess({
    pages: 'build',
    assets: 'build',
    fallback: '404.html',
    precompress: true,
  }),

  kit: {
    adapter: adapter(),
  },
}

export default config
