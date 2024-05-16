<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let className = '';
  let top: boolean = false;
  let bottom: boolean = false;

  export { className as class, bottom, top };
</script>

<div class={twMerge("relative w-full overflow-x-clip bg-[url('/hero-bg.png')] bg-cover", className)}>
  {#if top}
    <img src="/grass-top.svg" alt="" class="absolute top-0 min-w-full max-w-none" />
  {/if}
  <slot />
  {#if bottom}
    <img src="/grass-bottom.svg" alt="" class="absolute -bottom-2 min-w-full max-w-none" />
  {/if}
</div>
