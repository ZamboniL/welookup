<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let light = false;
</script>

<div
  class={twMerge(
    'flex w-fit items-center gap-2 rounded-full px-3 py-1 font-medium',
    light ? 'bg-primary-200/20' : 'bg-primary-200'
  )}
>
  <slot name="icon" /><span class={twMerge('text-sm', light ? 'text-white' : 'text-primary-400')}
    ><slot /></span
  >
</div>
