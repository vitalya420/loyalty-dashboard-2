<template>
  <div :class="themeClass" class="app-wrapper">
    <Sidebar :items="sidebarItems"></Sidebar>
    <main class="app-main">
      <NavBar></NavBar>
      <div class="page-view">
        <NuxtPage></NuxtPage>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAppState } from '~/store/appState';
import Sidebar from '~/components/navigation/Sidebar.vue';
import NavBar from '~/components/navigation/Navbar.vue';

const sidebarItems = [
  { name: "Dashboard", icon: 'bi-house', to: '/dashboard' },
  { name: "Establishments", icon: 'bi-building', to: '/dashboard/establishments' },
  { name: "News", icon: 'bi-newspaper', to: '/dashboard/news' },
  { name: "Promotions", icon: 'bi-percent', to: '/dashboard/promotions' },
  { name: "Stamps", icon: 'bi-check-circle', to: '/dashboard/stamps' },
  { name: "Coupons", icon: 'bi-gift', to: '/dashboard/coupons' },
  { name: "Manage staff", icon: 'bi-person-lines-fill', to: '/dashboard/staff' },
  { name: "Menu", icon: 'bi-cup-hot', to: '/dashboard/menu' },
  { name: "Clients", icon: 'bi-people', to: '/dashboard/clients' },
  { name: "Feedbacks", icon: 'bi-star', to: '/dashboard/feedbacks' },
  { name: "Logs", icon: 'bi-journal-text', to: '/dashboard/logs' },
  { name: "Settings", icon: 'bi-gear', to: '/dashboard/settings' },
];

const appState = useAppState();

const themeClass = computed(() => appState.isDarkTheme ? 'dark-theme' : 'light-theme');

onMounted(() => {
  appState.loadFromLocalStorage();
});
</script>

<style>
.app-wrapper {
  display: flex;
  height: 100dvh;
  overflow-x: hidden;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.app-main {
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--text-color) var(--background-primary-color);
}


.page-view {
  margin: calc(10px + 15px);
}
</style>