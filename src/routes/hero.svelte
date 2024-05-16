<script>
  import Tag from '$lib/tag.svelte';
  import TearSection from '$lib/tear-section.svelte';
</script>

<TearSection bottom top class="flex flex-col items-center px-4 pt-16 md:px-0 md:pb-80">
  <Tag light><span slot="icon">👋</span>Soluções criativas para todos!</Tag>
  <h1
    class="max-w-3xl pb-6 pt-8 text-center text-[40px] font-bold leading-[51px] text-white md:text-[56px] md:leading-[72px]"
  >
    Nossa missão é criar sites que ajudem você a conseguir mais clientes.
  </h1>
  <p class="text-base text-center pb-12 md:text-lg text-white">Mas fazemos as coisas de maneira um pouco diferente por aqui.</p>
  <div
    class="z-10 -mb-24 flex flex-col gap-3 md:absolute md:-bottom-24 md:mb-0 md:flex-row md:gap-4"
  >
    <div class="order-2 flex w-full gap-3 md:order-[unset] md:w-auto md:flex-col md:gap-4">
      <img src="/tags.png" alt="" class="w-[calc(50%_-_6px)] md:w-auto" />
      <img src="/years.png" alt="" class="w-[calc(50%_-_6px)] md:w-auto" />
    </div>
    <img src="/teams.png" alt="" class="order-1 row-span-2 w-full md:w-auto" />
    <div class="order-3 flex flex-col gap-3 md:order-[unset] md:gap-4">
      <div class="order-2 flex w-full gap-3 md:w-auto md:gap-4">
        <img src="/code.png" alt="" class="w-[calc(50%_-_6px)] md:w-auto" />
        <img src="/projects.png" alt="" class="w-[calc(50%_-_6px)] md:w-auto" />
      </div>
      <img
        src="/examples.png"
        alt=""
        class="order-1 col-span-2 w-full md:order-[unset] md:w-auto"
      />
    </div>
  </div>
</TearSection>
