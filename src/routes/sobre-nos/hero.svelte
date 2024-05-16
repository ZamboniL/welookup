<script>
  import Tag from '$lib/tag.svelte';
  import TearSection from '$lib/tear-section.svelte';
</script>

<TearSection bottom top class="flex flex-col items-center px-4 pb-80 pt-16 md:px-0">
  <Tag light><img src="/logo-w.png" slot="icon" alt="" class="h-4" />Sobre nós</Tag>
  <h1
    class="max-w-3xl pb-6 pt-8 text-center text-[40px] font-bold leading-[51px] text-white md:text-[56px] md:leading-[72px]"
  >
    Entenda um pouco mais da nossa jornada e porque somos diferentes!
  </h1>
  <p class="text-center text-base text-white md:text-lg">
    Aperfeiçoamos negócios online com o nosso DNA.
  </p>
  <img
    src="/about-us.png"
    alt=""
    class="absolute -bottom-32 z-10 h-96 w-[calc(100%_-_16px)] lg:w-[1170px] rounded-2xl object-cover"
  />
</TearSection>
