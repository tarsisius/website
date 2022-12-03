<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
</script>

<main class="flex flex-col max-w-2xl mx-auto my-4">
  {#each data.posts as post}
    <article class="mb-8">
      <span class="mb-4 flex">
        {#each post.tags as tag}
          <a class="mr-2" href={`/tags/${tag}`}>#{tag}</a>
        {/each}
      </span>
      <h2 class="mb-4">
        <a class="text-2xl font-semibold" href={post.slug}>{post.title}</a>
      </h2>
      <p>{post.description}</p>
    </article>
  {/each}
</main>
