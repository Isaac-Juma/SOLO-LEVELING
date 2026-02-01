<template>
  <div class="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-600">
    <div class="space-y-6">
      <!-- Title -->

      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-2">Score Counter</h2>
        <!-- <p class="text-slate-400">Level up your progress</p> -->
      </div>

      <!-- Score Display -->
      <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-center shadow-lg">
        <p class="text-slate-100 text-lg mb-2">Current Score</p>
        <p class="text-6xl font-bold text-white tracking-wider">{{ score }}</p>
      </div>

      <!-- Statistics -->
      <div class="grid gap-4">

        <!-- <div class="bg-slate-600/50 rounded-lg p-4 text-center border border-slate-500">
          <p class="text-slate-300 text-sm mb-1">Level</p>
          <p class="text-2xl font-bold text-green-400">{{ Math.floor(score / 10) }}</p>
        </div> -->

        <!-- <div class="bg-slate-600/50 rounded-lg p-4 text-center border border-slate-500">
          <p class="text-slate-300 text-sm mb-1">Progress</p>
          <p class="text-2xl font-bold text-yellow-400">{{ score % 10 }}/10</p>
        </div> -->

        <!-- <div class="bg-slate-600/50 rounded-lg p-4 text-center border border-slate-500">
          <p class="text-slate-300 text-sm mb-1">Streak</p>
          <p class="text-2xl font-bold text-orange-400">{{ streak }}</p>
        </div> -->
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-4 pt-4">
        <button
          @click="addScore"
          class="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          ✨ Add Score
        </button>
        <!-- <button
          @click="resetScore"
          class="flex-1 bg-slate-600 hover:bg-slate-700 text-slate-100 font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg border border-slate-500"
        >
          🔄 Reset
        </button> -->
      </div>

      <!-- Info Message -->
      <div v-if="score > 0" class="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 text-center">
        <p class="text-blue-100 text-sm">
          Great progress! Keep going to reach level {{ Math.floor(score / 10) + 1 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useScore } from '../composables/useScore'

const { score, streak, addScore, resetScore } = useScore()
</script>

<style scoped>
/* Smooth transitions */
button {
  will-change: transform;
}
</style>
