<script>
  import Tag from '$lib/tag.svelte';
  import TearSection from '$lib/tear-section.svelte';
</script>

<TearSection bottom top class="flex flex-col items-center pb-80 pt-16">
  <Tag light><img src="/logo-w.png" slot="icon" alt="" class="h-4" />Sobre nós</Tag>
  <h1 class="max-w-3xl pb-6 pt-8 text-center text-[56px] font-bold leading-[72px] text-white">
    Entenda um pouco mais da nossa jornada e porque somos diferentes!
  </h1>
  <p class="text-lg text-white">Aperfeiçoamos negócios online com o nosso DNA.</p>
  <img
    src="/about-us.png"
    alt=""
    class="absolute -bottom-32 z-10 h-96 w-[1170px] rounded-2xl object-cover"
  />
</TearSection>
