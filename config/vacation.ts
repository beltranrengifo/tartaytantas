const currentYear = new Date().getFullYear()

/*
 * IMPORTANT
 * for each date use this format: MM-DD
 */

const NATIONAL_HOLIDAYS: string[] = [
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

const tartaytantasVacations: string[] = [
  '07-26',
  '07-27',
  '07-28',
  '07-29',
  '07-30',
  '07-31',
  '08-01',
  '08-02',
  '08-03',
  '08-04',
  '08-05',
  '08-06',
  '08-07',
  '08-08',
  '08-09',
  '08-10',
  '08-11',
  '08-12',
  '08-13',
  '08-14',
  '08-15',
  '08-16',
  '08-17',
  '08-18',
  '08-19',
  '08-20',
  '08-21',
  '08-22',
  '08-23',
  '08-24',
  '08-25',
]

export const vacations = [
  ...NATIONAL_HOLIDAYS,
  ...currentYearRegionalHolidays,
  ...tartaytantasVacations,
].map((date) => `${currentYear}-${date}`)
