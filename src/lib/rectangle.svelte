<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let src = '';
  export let alt = '';
  let className = '';

  export { className as class };
</script>

<li
  class={twMerge(
    'flex h-[162px] w-full shrink-0 resize-none items-center justify-center border border-[#D9D5FF] p-16',
    className
  )}
>
  <img {src} {alt} class="max-h-24 max-w-full" />
</li>
