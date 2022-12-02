<script lang="ts">
  export let title: string
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<header>
  <div class="header_inner">
    <div class="header_logo">
      <a href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
    </div>
    <p class="header_title">{title}</p>
  </div>
</header>
