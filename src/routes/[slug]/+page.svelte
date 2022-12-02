<script lang="ts">
  import type { PageData } from './$types'
  import Header from '$lib/ui/header.svelte';

  export let data: PageData
</script>

<Header title={data.post.title} />
<main class="detail">
  <article class="article">{@html data.post.html}</article>
</main>
