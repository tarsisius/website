<script lang="ts">
  import type { PageServerData } from './$types'
  import Card from '$lib/ui/card.svelte'

  export let data: PageServerData
</script>

<main class="grid">
  {#each data.posts as post}
    <Card {post} />
  {/each}
</main>
