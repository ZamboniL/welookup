<script lang="ts">
  export let placeholder = '';
  export let type = 'text';
  export let value = '';
</script>

<input
  {type}
  {placeholder}
  {value}
  on:input
  class="w-full rounded-lg bg-primary-600 px-5 py-4 text-white placeholder:text-primary-300"
/>
