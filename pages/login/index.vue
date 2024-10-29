<template>
  <div class="login-page-background">
    <div class="login-form-wrapper">
      <div class="login-form-header">
        <h2 class="text-center">Welcome!</h2>
      </div>
      <div class="login-form-body">
        <form class="form-column" @submit.prevent="console.log">
          <div class="input-group-column">
            <label for="phone">Login:</label>
            <input type="text" id="phone">
          </div>
          <div class="input-group-column">
            <label for="password">Password:</label>
            <input type="password" id="password">
          </div>
          <div class="actions">
            <div class="theme-switcher-wrapper">
              <label for="theme">Theme:</label>
              <input type="checkbox" class="switch" :checked="appState.isDarkTheme" @change="appState.toggleTheme">
            </div>
            <button @click="() => this.$router.push({path: '/dashboard'})" class="button ">
              Log in
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAppState } from '@/store/appState';

const appState = useAppState();

onMounted(() => {
  appState.loadFromLocalStorage();
});

</script>

<style lang="scss">
@use "@/assets/styles/login_page.scss";
</style>
