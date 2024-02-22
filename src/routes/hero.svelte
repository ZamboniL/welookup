<script>
  import Tag from '$lib/tag.svelte';
</script>

<div
  class="relative flex w-full flex-col items-center bg-[url('/hero-bg.png')] bg-cover pb-80 pt-16"
>
  <img src="/grass-top.svg" alt="" class="absolute top-0 w-full" />
  <Tag light><span slot="icon">👋</span>Soluções criativas para todos!</Tag>
  <h1 class="max-w-3xl pb-6 pt-8 text-center text-[56px] font-bold leading-[72px] text-white">
    Nossa missão é criar sites que ajudem você a conseguir mais clientes.
  </h1>
  <p class="text-lg text-white">Mas fazemos as coisas de maneira um pouco diferente por aqui.</p>
  <div class="absolute -bottom-24 z-10 flex gap-4">
    <div class="flex flex-col gap-4">
      <img src="/tags.png" alt="" />
      <img src="/years.png" alt="" />
    </div>
    <img src="/teams.png" alt="" class="row-span-2" />
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <img src="/code.png" alt="" />
        <img src="/projects.png" alt="" />
      </div>
      <img src="/examples.png" alt="" class="col-span-2" />
    </div>
  </div>
  <img src="/grass-bottom.svg" alt="" class="absolute -bottom-2 w-full" />
</div>
