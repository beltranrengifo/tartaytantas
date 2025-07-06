import { generateDateRange, getCurrentYear } from './utils'

const currentYear = getCurrentYear()

// Morning-only periods (afternoon slots disabled)
// June 30 - July 26 (summer period with reduced afternoon availability)
export const morningOnlyDates = generateDateRange(
  `${currentYear}-06-30`,
  `${currentYear}-07-26`
)

// Time slot selector IDs used in Snipcart forms
export const TIME_SLOT_SELECTORS = {
  MORNING: 'tramo-de-entrega-manana',
  AFTERNOON: 'tramo-de-entrega-tarde',
} as const
