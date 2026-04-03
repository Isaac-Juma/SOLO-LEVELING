<script setup>
  import { userProfile } from '../composables/userProfile';

  const { userName, userPoints, userLevel, userExp, userPosition, userPicture } = userProfile;
</script>

<template>
  <div class="UserProfile flex flex-col items-center space-y-2 border-2 border p-4 m-4">
    
    <div class="grid grid-cols-2 grid-rows-3 gap-4 border ">

      <div class="col-span-2 place-items-center border-green-500 border">
        <p class="text-white text-xl">{{ userName }}</p>
          <img
            :src="userPicture || '/default-profile.jpg'"
            alt="UserProfile"
            class="w-32 h-32 
            md:w-48 md:h-48 
            lg:w-62 lg:h-62 flex flex-col bg-slate-400/40  rounded-full"
          />
      </div>

      <p class="bg-blue-500 text-bold text-center text-xl py-2 rounded-lg m-2 p-2 ">Position: {{ userPosition }}</p>
      
      <p class="bg-green-500 rounded-lg text-center text-bold text-xl py-2 m-2 p-2">
        Points: {{ userPoints }}
      </p>
      
      <p class="bg-yellow-500 rounded-lg text- text-center m-2 p-2 text-bold">
        Level : {{ userLevel }}
        <button class="bg-blue-700 m-2 p-2 rounded-xl text-bold">
          My-Form
        </button>
      </p>
      
      <p class="bg-red-500/90 rounded-lg m-2 p-2 text-center text-slate-300 text-bold text-xl py-2">
        Experience: {{ userExp }}
      </p> 
    </div>
  </div>
</template>
