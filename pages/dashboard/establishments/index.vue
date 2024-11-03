<template>
  <Card title="Establishments" subtitle="View, create or update or establishments!">
    <div class="establishment-page">
      <button class="button primary" v-if="establishments.length">
        <i class="bi bi-building-add"></i>
        <span>Create new establishment</span>
      </button>
      <div class="establishments-grid">
        <div v-if="establishments.length === 0" class="empty">
          <div>Create your first establishment!</div>
          <button class="button primary" @click="this.$router.push({path: '/dashboard/establishments/create'})">
            <i class="bi bi-building-add"></i>
            <span>Create new establishment</span>
          </button>
        </div>
      </div>
    </div>
  </Card>
</template>


<script setup>
import Card from '~/components/cards/Card.vue';
definePageMeta({
  layout: 'dashboard',
});

const establishments = [];

</script>

<style scoped>
.establishment-page{
  padding: 10px 0;
}

.establishments-grid{

}

.empty {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  user-select: none
}

</style>