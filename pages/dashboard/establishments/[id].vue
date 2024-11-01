<template>
  <Card title="Establishment Details" :subtitle="`Establishment ID: ${id}`">
    YEAHHAH
  </Card>
</template>

<script setup>
import Card from '~/components/cards/Card.vue';
definePageMeta({
  layout: 'dashboard',
});

const route = useRoute()

const id = route.params.id;

</script>

