// Step 1: Import necessary modules and dependencies
import { useDailyQuest } from "./DailyQuest";
import { ref, computed, watch} from 'vue';

const { DailyGoals, GoalsAchieved } = useDailyQuest();
const HealthScore = ref(0);

if (DailyGoals.value === GoalsAchieved.value) {

    HealthScore.value += 3;
}




// Step 2: Define the Health composable function
export function useHealth() {
    // Health Logic 
    const SleepHours = ref(0);
    const HydrationLevel = ref(0);
    const HealthStatus = computed(( ) => {
        const Good = SleepHours.value >= 7 && HydrationLevel.value >= 8;

        return Good ? 'Good Health' : 'Needs Improvement';
    });
    HealthStatus.value;
}



// Step 3: Export the Health composable function
    return {
        SleepHours,
        HydrationLevel,
        HealthStatus
    }


