const currentYear = new Date().getFullYear()

/*
 * IMPORTANT
 * for each date use this format: MM-DD
 */

// Morning-only periods (afternoon slots disabled)
const MORNING_ONLY_DATES: string[] = [
  '06-30',
  '07-01',
  '07-02',
  '07-03',
  '07-04',
  '07-05',
  '07-06',
  '07-07',
  '07-08',
  '07-09',
  '07-10',
  '07-11',
  '07-12',
  '07-13',
  '07-14',
  '07-15',
  '07-16',
  '07-17',
  '07-18',
  '07-19',
  '07-20',
  '07-21',
  '07-22',
  '07-23',
  '07-24',
  '07-25',
  '07-26',
]

export const morningOnlyDates = MORNING_ONLY_DATES.map(
  (date) => `${currentYear}-${date}`
)

// Time slot selector IDs used in Snipcart forms
export const TIME_SLOT_SELECTORS = {
  MORNING: 'tramo-de-entrega-manana',
  AFTERNOON: 'tramo-de-entrega-tarde',
} as const
