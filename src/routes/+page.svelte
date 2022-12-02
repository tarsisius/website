<script lang="ts">
  import type { PageData } from './$types'
  import Header from '$lib/ui/header.svelte';
  export let data: PageData
</script>

<Header title='Ini blog' />

<main class="list">
  {#each data.posts as post}
    <article class="child">
      <span class="tags">
        {#each post.tags as tag}
          <a href="/">#{tag}</a>
        {/each}
      </span>
      <h2 class="title"><a href={post.slug}>{post.title}</a></h2>
      <p>{post.description}</p>
    </article>
  {/each}
</main>
