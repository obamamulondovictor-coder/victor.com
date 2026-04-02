<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex gap-4 items-center padding-10 justify-between p-4 bg-transparent backdrop-blur-3xl text-black">
        <!-- logo -->
         <h1 class="h-10 bg-red-500 text-white p-2">Logo Of Victor-Coder</h1>

         <div class="gap-4 flex flex-row items-center hover:underline color:white">
            <RouterLink :to="{'name':'home'}">Home</RouterLink>
            <RouterLink :to="{'name':'about'}">About</RouterLink>
            <RouterLink :to="{'name':'service'}">Service</RouterLink>
            <RouterLink :to="{'name':'contact'}">Contact</RouterLink>
            <RouterLink :to="{'name':'project'}">Project</RouterLink>
         </div>
    </div>
</template>
