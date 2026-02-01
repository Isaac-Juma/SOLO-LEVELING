<template>
  <div class="hidden bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-600">
    <h2 class="text-2xl font-bold text-white mb-6">Create New User</h2>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!--User Input Daily Goals-->
      <div class="mb-4">
        <label class="">Goals</label>
        <input 
          v-model="formData.UserGoals"
          type="text"
          placeholder="WHAT ARE YOUR GOALS"
          class=""
          required
        />
      </div>
      <!-- Username Input -->
      <div>
        <label class="block text-slate-300 text-sm font-bold mb-2">Username</label>
        <input
          v-model="formData.username"
          type="text"
          placeholder="Enter username (min 3 chars)"
          class="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
          required
          minlength="3"
          maxlength="30"
        />
      </div>

      <!-- Email Input -->
      <div>
        <label class="block text-slate-300 text-sm font-bold mb-2">Email</label>
        <input
          v-model="formData.email"
          type="email"
          placeholder="Enter email address"
          class="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
          required
        />
      </div>

      <!-- Password Input -->
      <div>
        <label class="block text-slate-300 text-sm font-bold mb-2">Password</label>
        <input
          v-model="formData.password"
          type="password"
          placeholder="Enter password (min 6 chars)"
          class="w-full px-4 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
          required
          minlength="6"
        />
      </div>

      <!-- Error Message -->
      <div v-if="error" class="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
        <p class="text-red-200 text-sm">{{ error }}</p>
      </div>

      <!-- Success Message -->
      <div v-if="success" class="bg-green-500/20 border border-green-500/50 rounded-lg p-3">
        <p class="text-green-200 text-sm">
          ✅ User created! ID: <span class="font-mono">{{ successUserId }}</span>
        </p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
      >
        {{ isLoading ? '⏳ Creating...' : '✨ Create User' }}
      </button>
    </form>

    <!-- Display Created Users -->
    <div v-if="users.length > 0" class="mt-8 pt-8 border-t border-slate-600">
      <h3 class="text-lg font-bold text-white mb-4">Users in Database</h3>
      <div class="space-y-3 max-h-64 overflow-y-auto">
        <div
          v-for="user in users"
          :key="user._id"
          class="bg-slate-600/50 rounded-lg p-4 border border-slate-500"
        >
          <p class="text-white font-semibold">{{ user.username }}</p>
          <p class="text-slate-400 text-sm">{{ user.email }}</p>
          <p class="text-slate-400 text-sm">Level: {{ user.level }} | High Score: {{ user.highScore }}</p>
          <p class="text-slate-500 text-xs mt-2">ID: <span class="font-mono">{{ user._id }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { userService } from '../services/userService'

const formData = ref({
  UserGoals: '',
  username: '',
  email: '',
  password: '',
})

const isLoading = ref(false)
const error = ref('')
const success = ref(false)
const successUserId = ref('')
const users = ref([])

const handleSubmit = async () => {
  error.value = ''
  success.value = false
  isLoading.value = true

  try {
    // Call API to create user
    const response = await userService.createUser(formData.value)

    if (response.success) {
      // Success! Show message
      successUserId.value = response.data._id
      success.value = true

      // Reset form
      formData.value = {
        UserGoals: '',
        username: '',
        email: '',
        password: '',
      }

      // Reload users list
      loadUsers()

      // Clear success message after 3 seconds
      setTimeout(() => {
        success.value = false
      }, 3000)
    }
  } catch (err) {
    error.value = err.message || 'Failed to create user. Check console for details.'
    console.error('Error creating user:', err)
  } finally {
    isLoading.value = false
  }
}

const loadUsers = async () => {
  try {
    const response = await userService.getAllUsers()
    if (response.success) {
      users.value = response.data
    }
  } catch (err) {
    console.error('Error loading users:', err)
  }
}

// Load users on mount
loadUsers()
</script>

<style scoped>
input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>
