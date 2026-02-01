<script setup>
import { setGoals } from '../services/setGoals';

</script>

<template>
    <div class="SetGoals bg-slate-500/40 rounded-2xl px-4 sm:px-6 lg:px-8 py-3 m-4 p-4 border-b border-green-500/70">
        <h2 class="text-2xl text-center text-slate-200 ">SET YOUR GOALS</h2>
        <div class="GoalsContainer m-4 p-4 border border-green-500/50 rounded-lg">
            <form class="FormGoals flex flex-col place-items-center space-y-4">
                <label for="goalsInput" class="text-4xl text-slate-400">Enter Your Goal</label>
                <input id="goalsInput"
                  type="text" 
                  placeholder="Enter Your Goals Here..."
                  class="border-slate-400 rounded-lg m-4 p-4 border-4 text-2xl"
                />


                <button type="submit"
                  class="bg-green-500/70 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >Set Goals
                </button>
            </form>
        </div>
    </div>
</template>