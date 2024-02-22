<script>
  import Button from '$lib/button.svelte';
</script>

<nav class="m-auto flex max-w-6xl items-center justify-between py-6">
  <img src="/logo.png" alt="" />
  <ul class="flex gap-8">
    <li><a href="/#solucoes">Soluções</a></li>
    <li><a href="/#projetos">Projetos</a></li>
    <li><a href="/#como-fazemos">Como fazemos</a></li>
  </ul>
  <Button>Entrar em contato</Button>
</nav>

<style>
  a {
    font-weight: 500;
  }
</style>
