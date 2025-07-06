import { generateDateRange, getCurrentYear } from './utils'

const currentYear = getCurrentYear()

// Morning-only periods (afternoon slots disabled)
// Note from 2025:
// June 30 - July 25 (summer period with reduced afternoon availability)
// Note: July 26 starts vacation period, so it's excluded from morning-only
export const morningOnlyDates = generateDateRange(
  `${currentYear}-06-30`,
  `${currentYear}-07-25`
)

// Time slot selector IDs used in Snipcart forms
export const TIME_SLOT_SELECTORS = {
  MORNING: 'tramo-de-entrega-manana',
  AFTERNOON: 'tramo-de-entrega-tarde',
} as const
