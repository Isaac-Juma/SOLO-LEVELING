<script setup>
import { ref, onMounted } from 'vue';

// const UserProfile = ref(null);
const Name = ref('Isaac');
const Level =  ref(1);
const Experience = ref(0) ;
const UserPicture = ref('src/assets/Profile.jpg');



onMounted(async () => {
    try {
        // Fetch user profile data from the server
        const response = await axios.get('/api/Users/UserProfile');
        const data = response.data;
        Name.value = data.name;
    }
    catch (error) {
        
    }
})

</script>

<template>
    <div class="UserProfile p-4 m-4 bg-slate-800/80 rounded-lg shadow-md border border-slate-600">
        <h3 class="text-center text-white text-bold text-4xl ">{{ Name }}</h3>
        <img :src="UserPicture" alt="UserProfile" class="mx-auto w-auto h-auto rounded-full border-2 border-black shadow-lg my-4">
        <p class="bg-blue-500/40 rounded-lg text-center text-slate-300 text-bold text-xl py-2">LEVEL: {{ Level }}</p>
        <p class="bg-red-500/90 rounded-lg m-2 p-2 text-center text-slate-300 text-bold text-xl py-2">EXPERIENCE: {{ Experience }}</p>
    </div>
</template>