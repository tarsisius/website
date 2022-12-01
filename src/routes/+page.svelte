<script lang="ts">
  import type { PageData } from './$types'
  import Card from '$lib/ui/card.svelte'

  export let data: PageData
</script>

<main class="grid">
  {#each data.posts as post}
    <Card {post} />
  {/each}
</main>
