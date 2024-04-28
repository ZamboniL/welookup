<script lang="ts">
  export let title = '';
</script>

<div
  class="flex flex-col gap-6 rounded-2xl p-8"
  style="
    background: linear-gradient(110.72deg, rgba(255, 255, 255, 0.36) 1.21%, rgba(196, 196, 196, 0.06) 100%);
    border: 1px solid;
    border-image-source: linear-gradient(110.21deg, rgba(255, 255, 255, 0.7) 2.78%, rgba(255, 250, 203, 0.534754) 58.48%, rgba(255, 57, 57, 0.07) 72.66%, rgba(255, 255, 255, 0.595) 100%);
    "
>
  <h3 class="text-[36px] font-bold text-white">{title}</h3>
  <p class="text-sm text-white">
    <slot />
  </p>
</div>
