<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let icon = '/cart.svg';
  export let title = 'Implantação de e-commerce';
  export let description =
    'Somos Especializados na implementação e desenvolvimento de tecnologias para eCommerce. Nosso objetivo é trazer mais performance, usabilidade e conversão de vendas para seus negócios, com agilidade e transparência.';
  export let light = false;
</script>

<div
  class={twMerge(
    'flex flex-col gap-6 rounded-2xl p-8',
    light
      ? 'bg-primary-400 bg-[url("/card-bg-light.png")]'
      : 'bg-primary-600 bg-[url("/card-bg-dark.png")]'
  )}
>
  <div class="flex items-center gap-4">
    <img src={icon} alt="" class="h-16 w-16 rounded-lg bg-white p-3" />
    <h3 class="text-xl font-bold text-white">{title}</h3>
  </div>
  <p class="text-sm text-white">{description}</p>
</div>
