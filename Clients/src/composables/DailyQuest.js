// This file will contain the logic for the DailyQuest component
import {  ref  } from 'vue';

// The DailyQuest component will be responsible for displaying the user's daily goals and allowing them to mark them as completed or failed
export function DailyQuestSys () {
  
  // UserGoals in a scope array within the dsa in it....
  const usergoalsList = ref([
    {Name: 'Improve Awareness', Time: '8: 45 am'}, 
    {Name: 'Read', Time: '7 : 30 am'}, 
    {Name: 'Work-Out', Time: '6 : 40 am'},
    {Name: 'Practice', Time: '9 : 40 am'},
    {Name: 'Prayers', Time: '11 : 45 pm'},
    {Name: 'Journal', Time: '10 : 30 pm'}

  ]);

  // add created Goals to the usergoalsList
  const addGoals = (goals) => {
    // const response = async () => {  // fetch the  userGoals from the DB 
    // } 
    // try {
      //   const data = await response; // 
    // }
    // catch (error) {
    // return the modified error back to user
    // }
    usergoalsList.push(goals)
  };
  
  // Remove specific Goal from the array list
  const removeGoal = (goals) => {

    usergoalsList.splice(goals)
  };

  // Show the only achieved Goals from the array
  const achivedGoals = () => {

    usergoalsList.filter()
  };

  // Display a copy of Goals from the DB and Show it to the user in a List
  const userGoals = () => {

    return [...usergoalsList]
  };
  
  // Upon checking everyGoal it updates it's status according to the 
  const goalStatus = async () => {
    
  };

  return {
    addGoals,
    removeGoal,
    achivedGoals,
    userGoals,
    goalStatus
  };

};

export default DailyQuestSys;