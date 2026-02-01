// SET GOALS SERVICE
// create a service to set user goals

// Step1: import axios instace



// step 2: create setGoals function to send goal data to backend API 




// Step 3: export the setGoals function


// This service handles setting user goals by sending data to the backend API.

export const setGoals = async (goalData) => {
    try {
        const response = await axiosInstance.post('/goals', goalData);
        return response.data;

    } catch (error) {
        console.error('Error setting goals:', error);
        throw error;
    }
};

// Taking User Goals and sending to backend API
export const updateGoals = async (goalID, updateGoalsData) => {
    try {
        const response = await axiosInstance.put(`/goals/${goalID}`, updateGoalsData);
        return response.data;
    } 
    catch (error) {
        console.error('Error updating goals:', error);
        throw error;
    }
};

