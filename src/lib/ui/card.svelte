<script lang="ts">
  interface Post {
    thumbnail: string
    title: string
    slug: string
    date: string
    tags: string[]
  }

  export let post: Post
</script>

<article class="card">
  <img src={post.thumbnail} alt={post.thumbnail} class="card__thumbnail" />
  <div class="card__content">
    <div class="card__content_inner">
      <h3 class="card__title">
        <a href={post.slug}>{post.title}</a>
      </h3>
      <span class="card__tags">
        {#each post.tags as tag}
          <a href="/" class="card__tags_inner">
            #{tag}
          </a>
        {/each}
      </span>
    </div>
  </div>
</article>
