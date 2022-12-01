<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<main class="full">
  <article class="article">{@html data.post.html}</article>
</main>
