<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="flex gap-4 items-center justify-between p-4 bg-gray-800 text-white">
        <!-- logo -->
         <h1>Logo Of Victor-Coder</h1>

         <div class="gap-4 flex flex-row font-medium">
            <RouterLink :to="{'name':'about'}">Home</RouterLink>
            <RouterLink :to="{'name':'service'}">Service</RouterLink>
            <RouterLink :to="{'name':'contact'}">Contact</RouterLink>
            <RouterLink :to="{'name':'project'}">Project</RouterLink>
         </div>
    </div>
</template>
