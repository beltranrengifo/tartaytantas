const currentYear = new Date().getFullYear()

/*
 * IMPORTANT
 * for each date use this format: MM-DD
 */

const nationalHolidays: string[] = [
  '01-01',
  '01-06',
  '05-01',
  '05-02',
  '08-15',
  '10-12',
  '11-01',
  '12-06',
  '12-08',
  '12-25',
]

const currentYearRegionalHolidays: string[] = [
  '03-28',
  '03-29',
  '03-30',
  '05-15',
  '07-25',
  '11-09',
]

const tartaytantasVacations: string[] = []

export const vacations = [
  ...nationalHolidays,
  ...currentYearRegionalHolidays,
  ...tartaytantasVacations,
].map((date) => `${currentYear}-${date}`)
