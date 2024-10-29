<template>
  <div :class="themeClass">
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAppState } from '~/store/appState';

const appState = useAppState();


const themeClass = computed(() => appState.isDarkTheme ? 'dark-theme' : 'light-theme');

onMounted(() => {
  appState.loadFromLocalStorage();
});

</script>
