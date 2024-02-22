<script>
  import Hero from './hero.svelte';
</script>

<nav class="m-auto flex max-w-5xl items-center justify-between py-6">
  <img src="/logo.png" alt="" />
  <ul class="flex gap-8">
    <li><a href="/#solucoes">Soluções</a></li>
    <li><a href="/#projetos">Projetos</a></li>
    <li><a href="/#como-fazemos">Como fazemos</a></li>
  </ul>
  <button class="rounded-lg px-6 py-3 font-semibold text-white"> Entrar em contato</button>
</nav>
<Hero />

<style>
  a {
    font-weight: 500;
  }
  button {
    background: linear-gradient(93.1deg, #6a30f1 3.76%, #7f58fa 101.87%);
    box-shadow: 0px 4px 12px 0px #0f003452;
  }
</style>
