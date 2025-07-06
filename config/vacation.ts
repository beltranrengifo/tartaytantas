import { generateDateRange, getCurrentYear } from './utils'

const currentYear = getCurrentYear()

/**
 * Fixed national holidays (same every year)
 * Format: MM-DD
 */
const NATIONAL_HOLIDAYS: string[] = [
  '01-01', // New Year's Day
  '01-06', // Epiphany
  '05-01', // Labor Day
  '05-02', // Madrid Day
  '08-15', // Assumption of Mary
  '10-12', // National Day
  '11-01', // All Saints' Day
  '12-06', // Constitution Day
  '12-08', // Immaculate Conception
  '12-25', // Christmas Day
]

/**
 * Regional holidays for current year
 * These may change year to year - update as needed
 */
const currentYearRegionalHolidays: string[] = [
  '04-16', // Easter Monday (example - adjust as needed)
  '04-17', // Easter Tuesday (example - adjust as needed)
  '04-18', // Easter Wednesday (example - adjust as needed)
  '04-19', // Easter Thursday (example - adjust as needed)
]

/**
 * Convert MM-DD format to YYYY-MM-DD for current year
 */
function formatHolidayDate(dateString: string): string {
  return `${currentYear}-${dateString}`
}

/**
 * TartayTantas summer vacation period
 * July 26 - August 31
 */
const tartaytantasVacations = generateDateRange(
  `${currentYear}-07-26`,
  `${currentYear}-08-31`
)

/**
 * All vacation dates including:
 * - National holidays (fixed)
 * - Regional holidays (year-specific)
 * - TartayTantas summer vacation (generated)
 */
export const vacations = [
  ...NATIONAL_HOLIDAYS.map(formatHolidayDate),
  ...currentYearRegionalHolidays.map(formatHolidayDate),
  ...tartaytantasVacations,
]
