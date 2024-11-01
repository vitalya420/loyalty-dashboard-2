<template>
  <div class="card" style="background-color: var(--background-primary-color);">
    <div class="card-header">
      <h2>{{ title }}</h2>
      <span v-if="subtitle">{{ subtitle }}</span>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
    },
  }
}
</script>