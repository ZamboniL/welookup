<script lang="ts">
  export let icon = '👋';
</script>

<div class="bg-primary-300/20 flex items-center gap-2 rounded-full px-3 py-1">
  <span>{icon}</span><span class="text-sm text-white"><slot /></span>
</div>
