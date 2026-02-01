/**
 * Formats a number with thousand separators
 * @param {number} num - The number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num) => {
  return num.toLocaleString()
}

/**
 * Calculates the percentage of progress
 * @param {number} current - Current value
 * @param {number} total - Total value
 * @returns {number} Percentage (0-100)
 */
export const calculateProgress = (current, total) => {
  if (total === 0) return 0
  return Math.round((current / total) * 100)
}

/**
 * Debounce function for performance optimization
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (fn, delay = 300) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Validate if a value is within a range
 * @param {number} value - The value to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean} Is value within range
 */
export const isInRange = (value, min, max) => {
  return value >= min && value <= max
}
