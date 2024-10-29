<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="theme-toggle">
        <label class="theme-toggle__label">
          <span>Dark Mode:</span>
          <input 
            type="checkbox" 
            class="switch"
            :checked="appState.isDarkTheme"
            @change="appState.toggleTheme"
            aria-label="Toggle dark mode"
          >
        </label>
      </div>
      <button class="button danger" aria-label="Logout">
        <i class="bi bi-box-arrow-left icon"></i>
        <span class="hideable" @click="() => this.$router.push({path: '/login'})">Logout</span>
      </button>
    </nav>
  </div>
</template>

<script setup>

import { useAppState } from '~/store/appState';

const appState = useAppState();

</script>


<style>
.navbar-container {
  width: 100%;
  background: var(--background-primary-color);
  transition: background-color 0.3s ease;
}

.navbar {
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  display: flex;
  align-items: center;
}

.theme-toggle__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.theme-toggle__input {
  appearance: none;
  width: 3rem;
  height: 1.5rem;
  background-color: #dfe1e4;
  border-radius: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.theme-toggle__input:hover {
  background-color: #c9cbcd;
}

.theme-dark .theme-toggle__input:checked {
  background-color: var(--dark-background-color);
}



.theme-toggle__input::after {
  content: "";
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s ease;
}

.theme-toggle__input:checked::after {
  transform: translateX(1.5rem);
}



@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    padding-left: 50px;
    justify-content: space-between;
  }
  
  .navbar__button span {
    display: none;
  }
  
  .navbar__button {
    padding: 0.5rem;
  }
}
</style>