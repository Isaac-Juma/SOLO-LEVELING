<template>
  <!--Goals-->
  <div class="bg-gray-400 rounded-2xl">

    <!--Daily quest Header Component-->
    <div class="flex justify-center">
      <h2 class="text-center text-2xl underline">DAILY-QUEST</h2>
    </div>

    <!--Add new Goals to the List-->
    <div class="flex justify-between">
      <div class="flex-grow:0 p-2 m-2">
        <!--when clicked opens a modal and user Decides -->
        <button class="flex-grow:0 bg-blue-800 text-center m-2 p-4 rounded-2xl hover:bg-green-500"
          @click="toggleForm()">
          {{ isForm ? 'Close' : '+ New' }}
        </button>
      </div>
  
     <!--User Goals in a List -->
      <div class="flex-1 rounded-2xl py-4 m-2 p-2">
        <button class="flex-grow:0 bg-blue-800 text-center m-2 p-4 rounded-2xl hover:bg-green-500"
          @click="toggleGoalsList()">
          {{ showGoals ? 'Close': 'All-Goals' }}
        </button>
  
        <ol v-if="showGoals" >
          <li v-for="goal in usergoalsList" :key="goal.Name" >
            {{ goal.Name }}
          </li>
        </ol>
      </div>
    </div>
  
    <!-- toggleable goal form -->
    <SetGoals v-if="isForm" />
  
    <!-- Swiping through the Goals in the List while updating each goal with every click -->
    <div class="flex flex-col gap-4 p-4">
    
      <!-- <div class="flex justify-between place-items-center m-2 p-2"> -->
      <span v-if="currentItem" class="bg-green-600 text-4xl  m-4 p-4 rounded-2xl ">
        Goal : {{ currentItem.Name }}  <br>
        Time : {{ currentItem.Time }}
      </span>

      <!-- <p>{{ currentIndex + 1 }} {{ usergoalsList.Name }}</p> -->

      <div class="flex justify-between bg-blue-500 m-4 p-4 ">
        <!--status of the goal and update it in the real time-->
        <div class="">
          <label for="NotDone" class="text-2xl m-4"></label> <br>
          <input
            type="checkbox" 
            name="checkBox"
            class="accent-red-500 w-10 h-10 m-4 " 
          />
        </div>

        <div>
          <label class="text-2xl m-4" for="Done">Done</label> <br>
          <input 
            @change="NextPage"
            v-model="isChecked"
            type="checkBox"
            id="advanceChecbox"
            name=""
            class="accent-green-600 w-10 h-10 m-4"
          />
        </div>
      
      </div>
    </div>
  </div>
</template>

<script setup>
// Importing the SetGoals component to be used in this DailyQuest component
import SetGoals from './SetGoals.vue';
import { ref } from 'vue';

const usergoalsList = ref([
  {Name: 'Test', Time: '4 : 40'},
  {Name: 'Read', Time: '5 : 45'},
  {Name: 'Journal', Time: '6 : 30'},
  {Name: 'Pray', Time: '8 : 45 am'},
  {Name: 'Code', Time: '9 : 00 am'},
  {Name: 'Work-out', Time: '4 : 30 am'}
]);

const currentIndex = ref(0)
const isChecked = ref(false)
const currentItem = ref(usergoalsList.value[0]);
const NextPage = (event) => {
  const Checked = event.target.checked;
  isChecked.value = Checked
  if (Checked === true ) {
    currentIndex.value++
    if (currentIndex.value < usergoalsList.value.length){
      currentItem.value = usergoalsList.value[currentIndex.value]
    }
    else {
      currentItem.value = null
    }
  };
};

const isForm = ref(false);
function toggleForm () {
  isForm.value =!isForm.value;
};

const showGoals = ref(false);
function toggleGoalsList () {
  showGoals.value = !showGoals.value;
  console.log('Show goals is called: ', showGoals.value)
};
</script>