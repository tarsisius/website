<script lang="ts">
  // import '../app.css'
  import 'virtual:windi.css'

  import Header from '$lib/ui/header.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<Header />
<slot />
