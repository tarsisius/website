<script lang="ts">
  import '../app.css'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<header>
  <h1 class="logo">
    <a href="/">Blog</a>
  </h1>
  <p>Blog isinya apa aja lah</p>
</header>
<slot />
