<template>
  <div class="sidebar-wrapper">
    <div v-if="expanded" class="backdrop" @click="collapse"></div>
    
    <div class="sidebar" :class="{ 'sidebar-expanded': expanded }">
      <div class="sidebar-head">
        <div class="sidebar-logo" :class="{ 'opacity-0': !expanded }"></div>
        <button class="sidebar-switch-btn" @click="switchSidebar">
          <i class="bi" :class="expanded ? 'bi-caret-left-fill' : 'bi-caret-right-fill'"></i>
        </button>
      </div>
      
      <hr style="padding: 0; margin: 0;">
      
      <div class="sidebar-body">
        <div 
          class="sidebar-item" 
          :class="{ active: isActive(item.to) }" 
          v-for="item in items" 
          :key="item.to"
          @click="this.$router.push({path: item.to})"
        >
          <div class="sidebar-item-icon">
            <i class="bi" :class="item.icon"></i>
          </div>
          <nuxt-link :to="item.to" class="sidebar-item-text">{{ item.name }}</nuxt-link>
        </div>
      </div>
      <div class="sidebar-footer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      expanded: false,
    }
  },
  mounted() {
    // Access localStorage only in the client-side
    const savedState = localStorage.getItem('sidebarExpanded');
    if (savedState !== null) {
      this.expanded = JSON.parse(savedState);
    }
  },
  methods: {
    expand(){
      this.expanded = true;
      localStorage.setItem('sidebarExpanded', JSON.stringify(this.expanded));
    },
    collapse(){
      this.expanded = false;
      localStorage.setItem('sidebarExpanded', JSON.stringify(this.expanded));
    },
    switchSidebar(){
      this.expanded = !this.expanded;
      localStorage.setItem('sidebarExpanded', JSON.stringify(this.expanded));
    },
    isActive(path){
      return this.$route.path === path;
      const regex = new RegExp(`^${path}(\\/[^\\/]+.*)?$`);
      return regex.test(this.$route.path);
    }
  }
}
</script>

<style scoped lang="scss">
@import url('~/assets/styles/sidebar.scss');
</style>