<template>
  <div>
    <div class="grid-2">
      <Card title="Bussiness Information" class="col">
        <BussinessInformation></BussinessInformation>
      </Card>
      <Card title="Configuration" class="col">
        <BussinessConfiguration></BussinessConfiguration>
      </Card>
    </div>
    <Card title="Device Logged In">
      here should be table
    </Card>
  </div>
</template>

<script setup>
import Card from '~/components/cards/Card.vue';
import BussinessConfiguration from '~/components/forms/BussinessConfiguration.vue';
import BussinessInformation from '~/components/forms/BussinessInformation.vue';
definePageMeta({
  layout: 'dashboard',
});
</script>