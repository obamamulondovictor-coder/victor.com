<script setup>
import { inject, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logo from '../assets/victor_logo.png';

const isDark = inject('isDark');
const toggleTheme = inject('toggleTheme');
const isMenuOpen = ref(false);
const route = useRoute();

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
<template>
    <div class="flex gap-4 items-center p-3 sm:p-4 justify-between bg-transparent backdrop-blur-3xl text-black dark:text-white transition-colors duration-300 dark:bg-transparent" :class="{ 'relative': isMenuOpen }">
        <!-- Backdrop overlay -->
        <div v-if="isMenuOpen" class="fixed inset-0 bg-black/50 z-40 md:hidden" @click="closeMenu"></div>
        <!-- logo -->
        <RouterLink to="/" class="group">
            <img :src="logo" alt="Victor Coder Logo" class="h-12 sm:h-16 w-auto group-hover:scale-105 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
        </RouterLink>

        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-8 flex flex-row items-center text-black dark:text-white">
            <RouterLink class="relative cursor-pointer text-lg font-medium tracking-wide hover:tracking-wider hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300 group" to="/" v-slot="{ isActive }">
                <span :class="isActive ? 'text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]' : ''" class="font-['Poppins']">Home</span>
                <span class="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" :class="isActive ? 'w-full bg-green-400' : 'w-0'"></span>
            </RouterLink>
            <RouterLink class="relative cursor-pointer text-lg font-medium tracking-wide hover:tracking-wider hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300 group" :to="'/about'" v-slot="{ isActive }">
                <span :class="isActive ? 'text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]' : ''" class="font-['Poppins']">About</span>
                <span class="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" :class="isActive ? 'w-full bg-green-400' : 'w-0'"></span>
            </RouterLink>
            <RouterLink class="relative cursor-pointer text-lg font-medium tracking-wide hover:tracking-wider hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300 group" :to="'/service'" v-slot="{ isActive }">
                <span :class="isActive ? 'text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]' : ''" class="font-['Poppins']">Service</span>
                <span class="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" :class="isActive ? 'w-full bg-green-400' : 'w-0'"></span>
            </RouterLink>
            <RouterLink class="relative cursor-pointer text-lg font-medium tracking-wide hover:tracking-wider hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300 group" :to="'/contact'" v-slot="{ isActive }">
                <span :class="isActive ? 'text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]' : ''" class="font-['Poppins']">Contact</span>
                <span class="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" :class="isActive ? 'w-full bg-green-400' : 'w-0'"></span>
            </RouterLink>
            <RouterLink class="relative cursor-pointer text-lg font-medium tracking-wide hover:tracking-wider hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300 group" :to="'/project'" v-slot="{ isActive }">
                <span :class="isActive ? 'text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]' : ''" class="font-['Poppins']">Project</span>
                <span class="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full" :class="isActive ? 'w-full bg-green-400' : 'w-0'"></span>
            </RouterLink>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex gap-4 items-center">
            <!-- Theme Changer -->
            <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
                <!-- Sun icon (show when dark) -->
                <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <!-- Moon icon (show when light) -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
            <!-- Social Media -->
            <div class="flex gap-3">
                <a href="https://github.com" target="_blank" class="text-2xl text-black dark:text-white hover:text-[#000d1f] dark:hover:text-gray-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300" title="GitHub">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" class="text-2xl text-black dark:text-white hover:text-[#1877F2] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300" title="Facebook">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" class="text-2xl text-black dark:text-white hover:text-[#E4405F] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300" title="Instagram">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col gap-4 md:hidden z-50">
            <RouterLink class="text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" :class="{ 'text-green-500 bg-green-500/10': route.path === '/' }" to="/" @click="closeMenu">Home</RouterLink>
            <RouterLink class="text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" :class="{ 'text-green-500 bg-green-500/10': route.path === '/about' }" to="/about" @click="closeMenu">About</RouterLink>
            <RouterLink class="text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" :class="{ 'text-green-500 bg-green-500/10': route.path === '/service' }" to="/service" @click="closeMenu">Service</RouterLink>
            <RouterLink class="text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" :class="{ 'text-green-500 bg-green-500/10': route.path === '/contact' }" to="/contact" @click="closeMenu">Contact</RouterLink>
            <RouterLink class="text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" :class="{ 'text-green-500 bg-green-500/10': route.path === '/project' }" to="/project" @click="closeMenu">Project</RouterLink>
            
            <!-- Mobile Theme & Social -->
            <div class="flex gap-4 items-center pt-2 border-t dark:border-gray-700">
                <button @click="toggleTheme; closeMenu()" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>
                <div class="flex gap-3">
                    <a href="https://github.com" target="_blank" class="text-xl" title="GitHub">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" class="text-xl" title="Facebook">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" class="text-xl" title="Instagram">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
