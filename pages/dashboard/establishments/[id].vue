<template>
  <div>
    <h1>Establishment Details</h1>
    <p>Establishment ID: {{ id }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard',
});

const route = useRoute()

const id = route.params.id;

</script>

