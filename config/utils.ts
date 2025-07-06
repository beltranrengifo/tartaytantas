const currentYear = new Date().getFullYear()

/**
 * Generates an array of dates in YYYY-MM-DD format for a given date range
 * @param startDate - Start date in YYYY-MM-DD format
 * @param endDate - End date in YYYY-MM-DD format
 * @returns Array of date strings
 */
export function generateDateRange(
  startDate: string,
  endDate: string
): string[] {
  const dates: string[] = []
  const start = new Date(startDate)
  const end = new Date(endDate)

  const current = new Date(start)

  while (current <= end) {
    dates.push(current.toISOString().split('T')[0])
    current.setDate(current.getDate() + 1)
  }

  return dates
}

/**
 * Get the current year
 */
export function getCurrentYear(): number {
  return currentYear
}
