<script lang="ts">
  export let placeholder = '';
  export let value = '';
  export let rows = 8;
</script>

<textarea
  {placeholder}
  {value}
  {rows}
  on:input
  class="w-full resize-none rounded-lg bg-primary-600 px-5 py-4 text-white placeholder:text-primary-300"
/>
