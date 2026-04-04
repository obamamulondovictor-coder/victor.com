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
  <div
    class="min-h-screen transition-colors duration-300 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-green-950 dark:via-gray-900 dark:to-green-900">
    <navbar class="fixed top-0 left-0 w-full p-4 z-50 bg-white/70 backdrop-blur-md shadow-sm"></navbar>
    <!-- The  View Section-->
    <RouterView class="pt-16" />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #22c55e;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #16a34a;
}

.dark ::-webkit-scrollbar-track {
  background: #1f2937;
}

.dark ::-webkit-scrollbar-thumb {
  background: #22c55e;
  border-radius: 5px;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #4ade80;
}
</style>
