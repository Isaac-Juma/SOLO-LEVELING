<script setup>
import { computed } from 'vue';

const Health = async () => {
    const response = await fetch('/api/stats/health');
    const data = await response.json();
    return data;
}

</script>

<template>
    <div class="Categorys flex flex-col bg-slate-800/40 m-4 p-4 rounded-4xl">
        <h2 class="text-center text-slate-100/90 underline text-6xl m-2 p-2">CATEGORYS</h2>
        <!-- Health Box Container-->
        <div class="healthBox flex bg-green-500/40 m-2 p-2 rounded-2xl place-items-center">
            <h3 class="text-4xl">HEALTH 🍎🧑🏿‍⚕️</h3>
        </div>
        <!-- Mentality Box Container -->
        <div class=" flex bg-blue-500/50 m-2 p-2 rounded-2xl">
            <h3 class="text-4xl">MENTALITY 🧠</h3>
            <!-- <p>{{ Health().then(data => data.health) }}</p>
            <p>{{  }}</p> -->
        </div>

        <!-- Phyisicality Box Container-->
        <div class="flex bg-orange-400/40 m-2 p-2 rounded-2xl">
            <h3 class="text-4xl ">PHYSICALITY💪</h3>
        </div>
    </div>
</template>