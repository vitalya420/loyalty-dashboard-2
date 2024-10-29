import { defineStore } from "pinia";

export const useAppState = defineStore('appState', {
  state: () => ({
    activeTheme: 'light',
    sidebarOpen: true,
  }),

  getters: {
    isSidebarOpen: (state) => state.sidebarOpen,
    isDarkTheme: (state) => state.activeTheme === 'dark', // Move to getter
  },

  actions: {
    toggleTheme() {
      this.activeTheme = this.activeTheme === 'light' ? 'dark' : 'light';
      this.saveToLocalStorage();
    },
    
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      this.saveToLocalStorage();
    },

    setTheme(theme) {
      this.activeTheme = theme;
      this.saveToLocalStorage();
    },

    loadFromLocalStorage() {
      if (!import.meta.client) return;
      
      const storedState = localStorage.getItem('appState');
      if (storedState) {
        const { activeTheme, sidebarOpen } = JSON.parse(storedState);
        this.activeTheme = activeTheme;
        this.sidebarOpen = sidebarOpen;
        console.log('loaded', storedState);
      }
    },

    saveToLocalStorage() {
      if (!import.meta.client) return;
      
      localStorage.setItem('appState', JSON.stringify({
        activeTheme: this.activeTheme,
        sidebarOpen: this.sidebarOpen,
      }));
    },
  },
});
