<script lang="ts">
  import type { PageServerData } from './$types'

  export let data: PageServerData
</script>

<main class="full">
  <article class="article">{@html data.post.html}</article>
</main>
