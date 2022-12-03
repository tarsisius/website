<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
</script>

<main class="max-w-2xl mx-auto my-4">
  <h1 class="text-3xl font-bold mb-8">{data.post.title}</h1>
  <article class="w-full prose">{@html data.post.html}</article>
</main>
