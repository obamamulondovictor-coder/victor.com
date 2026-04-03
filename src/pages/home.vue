<script setup>
import { inject } from 'vue';
import { RouterLink } from 'vue-router';

const isDark = inject('isDark');
</script>
<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-8 md:py-12 pt-35">
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      <!-- Left Side - Standing Picture -->
      <div class="flex justify-center order-1 md:order-1">
        <div class="relative group">
          <!-- Card Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-400 via-white to-green-300 dark:from-green-800 dark:via-gray-800 dark:to-green-900 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
          
          <!-- Standing Image Container -->
          <div class="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-96 lg:w-96 lg:h-[500px] xl:w-[450px] xl:h-[600px] rounded-3xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl hover:scale-[1.02] group-hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="../assets/IMG_20260403_105856.jpg" 
              alt="Victor Mulondo Obama" 
              class="w-full h-full object-cover object-top"
            >
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-green-400 dark:bg-green-500 rounded-full opacity-40 blur-2xl"></div>
          <div class="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-green-300 dark:bg-green-600 rounded-full opacity-30 blur-xl"></div>
          
          <!-- Floating Badge - Bouncing -->
          <div class="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg animate-bounce">
            <p class="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm">Fronted Developer</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Description -->
      <div class="text-center md:text-left order-2 md:order-2">
        <p class="text-green-600 dark:text-green-400 font-medium tracking-wider uppercase mb-2 animate-pulse text-sm sm:text-base">Hello, There!</p>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          I'm <span class="text-green-500 dark:text-green-400">Victor Mulondo Obama</span>
        </h1>
        <h2 class="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 animate-pulse">
          Frontend Developer ,<span class="text-black dark:text-gray-300 font-bold">Still In Education</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
          I craft beautiful, responsive, and user-friendly web experiences. 
          Passionate about creating elegant solutions that bring ideas to life 
          with modern technologies and clean code.
        </p>
        
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <RouterLink 
            to="/project" 
            class="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 dark:hover:shadow-green-500/30 text-sm sm:text-base"
          >
            View My Projects
          </RouterLink>
          <button class="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium rounded-full transition-all duration-300 hover:scale-105 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 text-sm sm:text-base">
            Download Resume
          </button>
        </div>

        <!-- Stats -->
        <div class="mt-10 sm:mt-12 flex flex-wrap gap-3 sm:gap-40 lg:gap-10 justify-center md:justify-start border-4 border-green-500 h-auto min-h-[120px] w-full items-center p-4 sm:p-6 md:p-10 rounded-tl-2xl md:rounded-tl-3xl rounded-br-2xl md:rounded-br-3xl">
          <div class="text-center min-w-[70px]">
            <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 dark:text-green-400">2+</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Years Experience</p>
          </div>
          <div class="text-center min-w-[70px]">
            <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 dark:text-green-400">20+</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Projects</p>
          </div>
          <div class="text-center min-w-[70px]">
            <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 dark:text-green-400">10+</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Clients</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About Me Section -->
  <div class="py-12 md:py-16 px-4">
    <h1 class="dark:text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-8 md:mb-12">About Me</h1>
    
    <!-- Intro Paragraph -->
    <p class="dark:text-gray-300 text-gray-600 text-center text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
      I'm an <span class="text-green-500 dark:text-green-400 font-semibold">innovative</span> and <span class="text-green-500 dark:text-green-400 font-semibold">self-motivated</span> frontend developer with a passion for building intuitive, responsive web experiences. As a detail-oriented learner, I'm constantly exploring modern technologies.
    </p>

    <!-- Cards Grid -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Profile Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-green-500/50 hover:border-green-500 hover:border-l-8 hover:border-l-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold dark:text-white text-gray-800">My Profile</h2>
        </div>
        <ul class="space-y-2 text-sm dark:text-gray-300 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Developer in progress (junior → intermediate)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Focused on web development + system setup</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Hands-on learner — I learn by doing</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Try things, break them, and fix them</span>
          </li>
        </ul>
      </div>

      <!-- Technical Skills Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-green-500/50 hover:border-green-500 hover:border-l-8 hover:border-l-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 class="text-xl font-bold dark:text-white text-gray-800">Technical Skills</h2>
        </div>
        <div class="space-y-3">
          <div>
            <p class="text-sm font-semibold dark:text-green-400 text-green-600 mb-1">💻 Web Development</p>
            <p class="text-xs dark:text-gray-400 text-gray-500">HTML, CSS, Tailwind CSS, JavaScript, Vue.js</p>
          </div>
          <div>
            <p class="text-sm font-semibold dark:text-green-400 text-green-600 mb-1">🖥️ System & Tools</p>
            <p class="text-xs dark:text-gray-400 text-gray-500">Linux (Debian), XAMPP, VS Code, Terminal</p>
          </div>
          <div>
            <p class="text-sm font-semibold dark:text-green-400 text-green-600 mb-1">🛠️ Backend Exposure</p>
            <p class="text-xs dark:text-gray-400 text-gray-500">Apache, PHP, MySQL, phpMyAdmin</p>
          </div>
        </div>
      </div>

      <!-- Problem Solving Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-green-500/50 hover:border-green-500 hover:border-l-8 hover:border-l-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold dark:text-white text-gray-800">Problem Solving</h2>
        </div>
        <ul class="space-y-2 text-sm dark:text-gray-300 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Debug issues step by step</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Fix Linux system issues (audio, Wi-Fi, drivers)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Real developer mindset</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Ask specific questions</span>
          </li>
        </ul>
      </div>
      

      <!-- Learning Style Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-green-500/50 hover:border-green-500 hover:border-l-8 hover:border-l-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 class="text-xl font-bold dark:text-white text-gray-800">Learning Style</h2>
        </div>
        <ul class="space-y-2 text-sm dark:text-gray-300 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Learn by trying things fast</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Ask questions when stuck</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Experiment and fix mistakes</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">▹</span>
            <span>Real developers grow this way</span>
          </li>
        </ul>
      </div>

      <!-- Weak Points Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-orange-500/50 hover:border-orange-500 hover:border-l-orange hover:border-l-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold dark:text-white text-gray-800">Areas to Improve</h2>
        </div>
        <ul class="space-y-2 text-sm dark:text-gray-300 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-orange-500 mt-1">▹</span>
            <span>Sometimes jump between topics quickly</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-orange-500 mt-1">▹</span>
            <span>Don't always finish one concept before moving</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-orange-500 mt-1">▹</span>
            <span>Missing some fundamentals in certain areas</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-orange-500 mt-1">▹</span>
            <span>Don't always track what I changed</span>
          </li>
        </ul>
      </div>

      <!-- What I Can Become Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-green-500/50 hover:border-green-500 hover:border-l-8 hover:border-l-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold dark:text-white text-gray-800">What I Can Become</h2>
        </div>
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-green-500">🔥</span>
            <span class="text-sm dark:text-gray-300 text-gray-600">Strong Frontend Developer (Vue.js, Responsive UI)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-green-500">⚙️</span>
            <span class="text-sm dark:text-gray-300 text-gray-600">Dev + Linux Power User</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-green-500">🧩</span>
            <span class="text-sm dark:text-gray-300 text-gray-600">Problem Solver</span>
          </div>
          <div class="mt-4 p-3 bg-green-500/10 rounded-lg">
            <p class="text-xs dark:text-green-400 text-green-600 font-semibold">With consistency, I can level up VERY fast!</p>
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