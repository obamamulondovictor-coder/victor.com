<script setup>
import navbar from './components/navbar.vue';
import { RouterView } from 'vue-router';
import { ref, provide, onMounted } from 'vue';

const isDark = ref(false);
const showCookieBanner = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  }
};

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted');
  showCookieBanner.value = false;
};

const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined');
  showCookieBanner.value = false;
};

onMounted(() => {
  initTheme();
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches;
      if (isDark.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });

  const cookieConsent = localStorage.getItem('cookieConsent');
  if (!cookieConsent) {
    showCookieBanner.value = true;
  }
});

provide('isDark', isDark);
provide('toggleTheme', toggleTheme);
</script>
<template>
  <!-- my victor portfolio --keep it simple -->
  <div
    class="min-h-screen transition-colors duration-300 bg-linear-to-br from-green-50 via-white to-green-100 dark:from-green-950 dark:via-gray-900 dark:to-green-900">
    <navbar class="fixed top-0 left-0 w-full p-4 z-50 bg-white/70 backdrop-blur-md shadow-sm"></navbar>
    <!-- The  View Section-->
    <RouterView class="pt-16" />
    
    <!-- Cookie Banner -->
    <div v-if="showCookieBanner"
      class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t border-green-500 dark:border-green-400 p-4 sm:p-6 z-50">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1">Cookie Settings</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies. You can manage your preferences at any time.
            </p>
          </div>
        </div>
        <div class="flex gap-3 shrink-0">
          <button @click="declineCookies"
            class="px-5 py-2.5 text-sm font-medium border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
            Decline All
          </button>
          <button @click="acceptCookies"
            class="px-5 py-2.5 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            Accept All
          </button>
        </div>
      </div>
    </div>
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
