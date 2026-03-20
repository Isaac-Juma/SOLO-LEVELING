<template>

  <div id="app" class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Header -->
    <header class="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        <h1
          class="text-3xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          {{ appName }}
        </h1>
        
      </div>
    </header>

    <nav class="">
      <div class="" id="navigation">
        <!-- Menu Icon and User Profile  -->
        <div class="bg-slate-400 text-white m-2 p-2 flex items-center space-x-4 justify-between rounded-lg"
          @click="document.getElementById('Pages').classList.toggle('hidden')">

          <div class="block lg:hidden flex items-center space-x-2 cursor-pointer">
            <img src="./views/menu.png" alt="menu" class="">
            <span class="">Menu</span>
          </div>

          
        </div>
        
        <!--MENU FOR NAVIGATION THROUG THE PAGE-->
        <div class="flex flex-col bg-gray-600 space-y-4 text-white text-xl m-2 p-2 rounded-lg
          lg:flex flex-row space-x-8 justify-between m-4 p-4" id="Pages">
          <a href="daily-quest" class="">Daily-Quest</a>
          <a href="Profile" class="">Profile</a>
          <a href="account" class="">Account</a>
        </div>

      </div>
    </nav>
    
    <div class="block lg:flex items-center space-x-2 m-4 p-4">
      <UserProfile/>
    </div>
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="">
        <!--Daily Qust Component-->
        <DailyQuest />
      </div>
      
      <div class="">
        <!-- User Form Component -->
        <UserForm />
      </div>
      
      <div class="">
        <!-- Rewards Component-->
        <Rewards />
      </div>
   
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800/50 border-t border-slate-700 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-slate-400 text-sm">
          © 2026 LEVEL UP. Built with Vue 3 & Tailwind CSS.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import UserProfile from './components/UserProfile.vue';
  import SetGoals from './components/SetGoals.vue';
  import ScoreCard from './components/ScoreCard.vue';
  import DailyQuest from './components/DailyQuest.vue';
  import UserForm from './components/UserForm.vue';
  import Rewards from './components/Rewards.vue';
  import Stats from './components/Stats.vue';
  import dashBoard from './views/dashBoard.vue';
  import menu from './views/menu.png';


  const appName = computed(() => import.meta.env.VITE_APP_NAME || 'Personal Leveling Up');
</script>

<style scoped>
  #app {
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
