<script setup> 
import navbar from './components/navbar.vue';
import { RouterView } from 'vue-router';
import { ref, provide } from 'vue';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

provide('isDark', isDark);
provide('toggleTheme', toggleTheme);
</script>
<template>
<!-- my victor porfolio --keep it simple -->
 <div class="min-h-screen transition-colors duration-300 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-green-950 dark:via-gray-900 dark:to-green-900">
  <navbar class="fixed top-o left-o w-full p-4 z-50 bg-white/70 backdrop-blur-md shadow-sm"></navbar>
  <RouterView />
 </div>
</template>

<style scoped></style>
