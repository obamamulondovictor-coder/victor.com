<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex gap-4 items-center p-5 justify-between p-4 bg-transparent backdrop-blur-3xl text-black">
        <!-- logo -->
         <h1 class="h-10 bg-red-500 text-white p-2">Logo Of Victor-Coder</h1>

         <div class="gap-4 flex flex-row items-center text-black ">
            <RouterLink class="hover:underline font-bold hover:scale-110" :to="{'name':'home'}">Home</RouterLink>
            <RouterLink class="hover:underline font-bold hover:scale-110" :to="{'name':'about'}">About</RouterLink>
            <RouterLink class="hover:underline font-bold hover:scale-110" :to="{'name':'service'}">Service</RouterLink>
            <RouterLink class="hover:underline font-bold hover:scale-110" :to="{'name':'contact'}">Contact</RouterLink>
            <RouterLink class="hover:underline font-bold  hover:scale-110" :to="{'name':'project'}">Project</RouterLink>
         </div>
         <div>
            
         </div>
    </div>
</template>
