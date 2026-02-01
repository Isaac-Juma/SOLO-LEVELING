<template>
    <div>
        <!--Daily quest-->
        <div class="flex flex-col gap-4 p-4">
            <h2 class="flex-1 bg-slate-500/60 text-center text-2xl">DAILY-QUEST</h2>
            <p class="flex-1 bg-slate-400/60 text-center text-1xl">YOU WILL GET A POINT ON EACH TASK COMPLETED</p>
        </div>

        <!--Goals list-->
        <div class="flex flex-col gap-4 p-4">
            <div class="bg-slate-700/50 p-4 rounded-xl">
                <div class="flex justify-between">
                    <span class="text-2xl text-slate-200">Goal 1</span>
                    <input type="checkbox"class="w-5 h-5"/>
                </div>
            </div>
        </div>

        <!--Operation buttons-->
        <div class="flex gap-4 pt-4">
            <button @click="addScore" class="flex-1 bg-green-500/50 m-4 p-4 rounded-2xl
              hover:bg-green-500/100 border-gray-300 border-2">DONE</button>
            <button @click="" class="flex-1 bg-red-500/50 m-4 p-4 rounded-2xl
              hover:bg-red-500/100 border-black border-2">FAILED</button>
        </div>
        
    </div>
</template>

<script setup>
    import { useScore } from '../composables/useScore';

    const { addScore } = useScore();
    
</script>