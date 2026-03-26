import axios from "axios";
// API service for 
// User-related operations: update goals, get level info, get leaderboard
// When user updates goals, we also want to update their level and experience based on the new goals



/**
 * User API Service
 * Centralized place for all user-related API calls
 */

// Use /api during development (proxied), full URL in production
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const Api_Axios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }}
);

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `HTTP ${response.status}`);
  }

  return data;
};

// Helper function to build query strings

// Create API Requests for User Operations
/**Create User Goals
 * 
 * 
 * 
 */
export const userService = {
  createUserGoals: async (userGoals) => {
    const response = await fetch(`${API_BASE_URL}/usergoals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(userGoals)
    });
    return handleResponse(response);
  },

  /**
   * updateUserGoals 
   */
  updateUserGoals: async (userId, userGoals) => {
    const response = await fetch(`${API_BASE_URL}/usergoals/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(userGoals)
    });
    return handleResponse(response);
  },

  /**
   * Create a new user
   * @param {Object} userData - { username, email, password }
   * @returns {Promise}
   */
  createUser: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  /**
   * Authenticate user (login)
   * @param {Object} credentials - { email, password }
   * @returns {Promise}
   */
  authenticatorUser: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/user/authenticate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  /**
   * Get all users
   * @returns {Promise}
   */
  getAllUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'GET',
    });
    return handleResponse(response);
  },

  /**
   * Get userGoals for update
   */
  getUserGoals: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/usergoals/${userId}`, {
      method: 'GET',
    });
    return handleResponse(response);
  },

  dp : async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/User`, {
      method: 'GET',
      headers: {'Content-Type': 'Application/json'},

    });
    return handleResponse(response)
  },


  /**
   * Get single user by ID
   * @param {string} userId - MongoDB user ID
   * @returns {Promise}
   */
  getUserById: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'GET',
    });
    return handleResponse(response);
  },

  /**
   * Update user
   * @param {string} userId - MongoDB user ID
   * @param {Object} updateData - { username, email, level, experience, highScore }
   * @returns {Promise}
   */
  updateUser: async (userId, updateData) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });
    return handleResponse(response);
  },

  /**
   * Delete user
   * @param {string} userId - MongoDB user ID
   * @returns {Promise}
   */
  deleteUser: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },

  /**
   * Get leaderboard
   */
};


export default userService;