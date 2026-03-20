<script setup>
// component simply renders the goal form; visibility is controlled by the parent
import { ref, computed } from 'vue';
import userService from '../services/userService.js';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


const userGoals = ref({
  Goal: '',
  ReminderDate: null,
  ReminderTime: '',
  DeadlineDate: null,
  DeadlineTime: '',
});

const previewReminder = computed(() => {
  if (!userGoals.value.ReminderDate) return 'none';
  const d = new Date(userGoals.value.ReminderDate);
  const time = userGoals.value.ReminderTime || d.toLocaleTimeString();
  return `${d.toLocaleDateString()} ${time}`;
});

const previewDeadline = computed(() => {
  if (!userGoals.value.DeadlineDate) return 'none';
  const d = new Date(userGoals.value.DeadlineDate);
  const time = userGoals.value.DeadlineTime || d.toLocaleTimeString();
  return `${d.toLocaleDateString()} ${time}`;
});

const setQuickTime = (fieldSuffix, hours) => {
  const timeStr = `${String(hours).padStart(2, '0')}:00`;
  if (fieldSuffix === 'Reminder') {
    userGoals.value.ReminderTime = timeStr;
  } else if (fieldSuffix === 'Deadline') {
    userGoals.value.DeadlineTime = timeStr;
  }
};


const formHandler = async () => {
  try {
    const buildDateTime = (dateObj, timeStr) => {
      if (!dateObj) return null;
      const dt = new Date(dateObj);
      if (timeStr) {
        const [hh, mm] = timeStr.split(':').map((s) => parseInt(s, 10));
        if (!Number.isNaN(hh) && !Number.isNaN(mm)) dt.setHours(hh, mm, 0, 0);
      }
      return dt.toISOString();
    };

    const payload = {
      Goal: userGoals.value.Goal,
      Reminder: buildDateTime(userGoals.value.ReminderDate, userGoals.value.ReminderTime),
      Deadline: buildDateTime(userGoals.value.DeadlineDate, userGoals.value.DeadlineTime),
    };

    const response = await userService.createUserGoals(payload);

    if (response) {
      console.log('Goal created successfully:', response);
      userGoals.value = {
        Goal: '',
        ReminderDate: null,
        ReminderTime: '',
        DeadlineDate: null,
        DeadlineTime: '',
      };
    }
  } catch (err) {
    console.error('Error creating user goals:', err);
  }
};
</script>

<template>
  <div
    class="bg-gray-500 flex flex-col rounded-2xl m-4 p-4"
    name="user_Goals"
    id="userGoals"
  >
    <h2 class="text-2xl text-center text-slate-200">SET YOUR GOALS</h2>
    <div class="flex flex-col place-items-center">
      <form @submit.prevent="formHandler"
        class="flex flex-col rounded-2xl place-items-center p-2 m-2">
        <label for="goalsInput" id="goalsInput" class="text-white text-lg">Enter Your Goal</label>
        <label for="example" id="example" class="justify-center text-slate-200/40 text-lg">Example: Improve Awareness</label>

        <input
          v-model="userGoals.Goal"
          id="goalsInput"
          type="text"
          placeholder="Add Your Goals Here..."
          class="flex-1 bg-blue-300 rounded-2xl p-4 m-4"
          required="true"
        />

        <label for="Reminder" id="Reminder" class="text-white text-lg">Reminder</label>
        <div class="w-full m-4">
          <VueDatePicker
            v-model="userGoals.ReminderDate"
            :enable-time="false"
            :format="'yyyy-MM-dd'"
            :min-date="new Date()"
            placeholder="Select reminder date"
            class="w-full bg-blue-300 rounded-2xl p-3 text-lg font-semibold"
          />

          <label for="Time" id="Time" class="text-white p-2 mt-3 block">Time:</label>
          <input
            v-model="userGoals.ReminderTime"
            type="time"
            class="w-full bg-blue-300 rounded-2xl p-3 text-lg font-bold font-mono"
            aria-label="Reminder time"
            placeholder="Set Your Reminder Time"
          />

          <div class="flex gap-2 mt-2 flex-wrap justify-center">
            <button type="button" @click="setQuickTime('Reminder', 9)" class="bg-purple-400 text-white text-xs px-3 py-1 rounded-lg hover:bg-purple-500">9 AM</button>
            <button type="button" @click="setQuickTime('Reminder', 12)" class="bg-purple-400 text-white text-xs px-3 py-1 rounded-lg hover:bg-purple-500">12 PM</button>
            <button type="button" @click="setQuickTime('Reminder', 18)" class="bg-purple-400 text-white text-xs px-3 py-1 rounded-lg hover:bg-purple-500">6 PM</button>
            <button type="button" @click="setQuickTime('Reminder', 20)" class="bg-purple-400 text-white text-xs px-3 py-1 rounded-lg hover:bg-purple-500">8 PM</button>
          </div>
          <p class="text-sm text-gray-200 mt-2">Selected: {{ previewReminder }}</p>
        </div>
      
        <label for="Deadlines" id="Deadlines" class="text-white text-lg mt-4">Deadline</label>
        <div class="w-full m-4">
          <VueDatePicker
            v-model="userGoals.DeadlineDate"
            :enable-time="false"
            :format="'yyyy-MM-dd'"
            :min-date="new Date()"
            placeholder="Select deadline date"
            class="w-full bg-blue-300 rounded-2xl p-3 text-lg font-semibold"
          />
          <label for="DeadlineTime" id="DeadlineTime" class="text-white text-sm mt-3 block">Time:</label>
          <input
            v-model="userGoals.DeadlineTime"
            type="time"
            class="w-full bg-blue-300 rounded-2xl p-3 text-lg font-bold font-mono"
            aria-label="Deadline time"
            placeholder="Click Here To Set Your Deadline Time"
          />
          <div class="bg-orange-500 flex gap-2 mt-2 flex-wrap justify-center text-white py-1 rounded-lg">
            <button type="button" @click="setQuickTime('Deadline', 9)" class="hover:bg-red-500">9 AM</button>
            <button type="button" @click="setQuickTime('Deadline', 12)" class="hover:bg-orange-500">12 PM</button>
            <button type="button" @click="setQuickTime('Deadline', 18)" class="hover:bg-blue-500">6 PM</button>
            <button type="button" @click="setQuickTime('Deadline', 20)" class="hover:bg-green-500">8 PM</button>
          </div>
          <p class="text-sm text-gray-200 mt-2">Selected: {{ previewDeadline }}</p>
        </div>

        <button
          id="setBtn"
          type="submit"
          class="flex-1 bg-green-400 m-4 p-4 justify-center w-50 rounded-2xl text-white text-lg"
        >
          Add
        </button>

      </form>
    </div>
  </div>
</template>