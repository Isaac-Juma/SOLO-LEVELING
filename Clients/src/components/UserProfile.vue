<script setup>
  import { ref, onMounted } from 'vue';
  import userService from '../services/userService';
  import axios from 'axios';
  import ProfileImage from '@/assets/Profile.jpg';
  import { Api_Axios } from '../services/userService';
  // I need to finish this by Today 
  // The logic of fetching and display the user profile


  const UserProfile = async () => {
    try {
      const Dp = Api_Axios.get('/Users')
      console.log(Dp)
    } catch (error) {
      console.error(error)
    }

  };
  
const Name = ref('Isaac')
  const UserPicture = ref(ProfileImage);
  const Position = ref(7);
  const Points = ref(6);
  const Level = ref(4);
  const Experience = ref(3);

  onMounted(async () => {
    try {
      // Fetch user profile data from the server
      const response = await axios.get('/api/Users');
      const data = response.data;
      Name.value = data.name;
    } catch (error) {}
  });
</script>

<template>
  <div class="UserProfile flex flex-col items-center space-y-2 border-2 border p-4 m-4">
    
    <div class="grid grid-cols-2 grid-rows-3 gap-4 border ">

      <div class="col-span-2 place-items-center border-green-500 border">
        <h3 class="text-white text-xl">{{ Name }}</h3>
  
          <img
            :src="UserPicture"
            alt="UserProfile"
            class="w-32 h-32 
            md:w-48 md:h-48 
            lg:w-62 lg:h-62 flex flex-col bg-slate-400/40  rounded-full"
          />

      </div>
      
      
      <p class="bg-blue-500 text-bold text-center text-xl py-2 rounded-lg m-2 p-2 ">Position: {{ Position }}</p>
      
      <p class="bg-green-500 rounded-lg text-center text-bold text-xl py-2 m-2 p-2">
        Points: {{ Points }}
      </p>
      
      <p class="bg-yellow-500 rounded-lg text- text-center m-2 p-2 text-bold">
        Level : {{ Level }}
        <button class="bg-blue-700 m-2 p-2 rounded-xl text-bold">
          My-Form
        </button>
      </p>
      
      <p class="bg-red-500/90 rounded-lg m-2 p-2 text-center text-slate-300 text-bold text-xl py-2">
        Experience: {{ Experience }}
      </p> 

    </div>
  </div>
</template>
