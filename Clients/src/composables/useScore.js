import { ref, computed } from 'vue'

export function useScore(initialScore = 0) {
  const score = ref(initialScore)
  // const streak = ref(0)

  const level = computed(() => Math.floor(score.value / 10))
  const progress = computed(() => score.value % 10)

  const addScore = () => {
    score.value += 1
    // streak.value += 1
  }

  const resetScore = () => {
    score.value = 0
    // streak.value = 0
  }

  const setScore = (newScore) => {
    score.value = newScore
  }

  return {
    score,
    // streak,
    level,
    progress,
    addScore,
    resetScore,
    setScore,
  }
}
