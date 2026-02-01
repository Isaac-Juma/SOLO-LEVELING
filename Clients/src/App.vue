<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Header -->
    <header class="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 class="text-3xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          {{ appName }}
        </h1>
      </div>
    </header>

    <nav class="bg-slate-800/40 px-4 sm:px-6 lg:px-8 py-3 border-b border-green-500/70">
      <!-- Navigation Content -->
      <div class="flex flex-wrap gap-4 justify-between items-center overflow-hidden space-y-4">
        <div class="flex-1">
          <!-- Category or stats-->
           <Stats/>
        </div>
          
        <div class="flex-1 space-x-4 ">   
            
          <!-- User Profile Component-->
          <UserProfile/>
          
        </div>
        
        <div class="flex-1">

         <!-- Set Goals Componennt -->
          <SetGoals/>
        </div>
        
        <div class="flex-1">
          
          <!-- Score Card Component -->
          <ScoreCard />
        </div>

      </div>
    </nav>


    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="sm:grid grid-cols-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!--Daily Qust Component-->
        <DailyQuest/>
        <!-- User Form Component -->
        <UserForm />

        <!-- Rewards Component-->
         <Rewards/>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800/50 border-t border-slate-700 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-slate-400 text-sm">
          © 2026 Personal Leveling Up. Built with Vue 3 & Tailwind CSS.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import UserProfile from './components/UserProfile.vue';
import SetGoals from './components/SetGoals.vue';
import ScoreCard from './components/ScoreCard.vue'
import DailyQuest from './components/DailyQuest.vue';
import UserForm from './components/UserForm.vue';
import Rewards from './components/Rewards.vue';
import Stats from './components/Stats.vue';

const appName = computed(() => import.meta.env.VITE_APP_NAME || 'Personal Leveling Up')
</script>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>