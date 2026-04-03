<script setup>
import { inject } from 'vue';
import { RouterLink } from 'vue-router';

const isDark = inject('isDark');
</script>
<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-12">
    <div class="max-w-6xl w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      <!-- Left Side - Standing Picture -->
      <div class="flex justify-center">
        <div class="relative group">
          <!-- Card Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-400 via-white to-green-300 dark:from-green-800 dark:via-gray-800 dark:to-green-900 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
          
          <!-- Standing Image Container -->
          <div class="relative w-80 h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px] rounded-3xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop" 
              alt="Victor Mulondo Obama" 
              class="w-full h-full object-cover object-top"
            >
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-green-400 dark:bg-green-500 rounded-full opacity-40 blur-2xl"></div>
          <div class="absolute -top-6 -left-6 w-20 h-20 bg-green-300 dark:bg-green-600 rounded-full opacity-30 blur-xl"></div>
          
          <!-- Floating Badge - Bouncing -->
          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 item-center dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg animate-bounce">
            <p class="text-green-600 dark:text-green-400 font-semibold text-sm">Fronted Developer</p>
            
          </div>
        </div>
      </div>

      <!-- Right Side - Description -->
      <div class="text-center md:text-left">
        <p class="text-green-600 dark:text-green-400 font-medium tracking-wider uppercase mb-2 animate-pulse">Hello, There!</p>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          I'm <span class="text-green-500 dark:text-green-400">Victor Mulondo Obama</span>
        </h1>
        <h2 class="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 animate-pulse">
          Frontend Developer ,<span class="text-white">Still In Education</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
          I craft beautiful, responsive, and user-friendly web experiences. 
          Passionate about creating elegant solutions that bring ideas to life 
          with modern technologies and clean code.
        </p>
        
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <RouterLink 
            to="/project" 
            class="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 dark:hover:shadow-green-500/30"
          >
            View My Projects
          </RouterLink>
          <button class="px-8 py-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium rounded-full transition-all duration-300 hover:scale-105 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900">
            Download Resume
          </button>
        </div>

        <!-- Stats -->
        <div class="mt-12 flex gap-6 lg:gap-10 justify-center md:justify-start">
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-green-500 dark:text-green-400">2+</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Years Experience</p>
          </div>
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-green-500 dark:text-green-400">20+</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Projects</p>
          </div>
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-green-500 dark:text-green-400">10+</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Clients</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-8px);
  }
}

.animate-bounce {
  animation: bounce-subtle 2s ease-in-out infinite;
}
</style>