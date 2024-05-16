<script>
  import HeaderButton from './header-button.svelte';
</script>

<nav class="m-auto flex max-w-6xl items-center justify-between py-6">
  <img src="/logo.png" alt="" />
  <ul class="hidden gap-8 text-sm text-primary-600 md:flex">
    <li><a href="/">Home</a></li>
    <li><a href="/#solucoes">Soluções</a></li>
    <li><a href="/#projetos">Projetos</a></li>
    <li><a href="/#como-fazemos">Como fazemos</a></li>
    <li><a href="/sobre-nos">Sobre nós</a></li>
  </ul>
  <HeaderButton>Entrar em contato</HeaderButton>
</nav>

<style>
  a {
    font-weight: 500;
  }
</style>
