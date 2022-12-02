import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: true,
    }),
  },
}

export default config
