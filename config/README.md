# Date Configuration System

Simple date range generation to replace manual date listing.

## Files

### `utils.ts`

Contains the `generateDateRange()` utility function used by other config files.

### `schedule.ts`

Contains morning-only period configuration using the date range generator.

### `vacation.ts`

Contains holiday and vacation date configurations using the date range generator.

## How to Update Dates

### 1. Morning-Only Periods (Summer Schedule)

**Current**: June 30 - July 26

To change the morning-only period, edit `config/schedule.ts`:

```typescript
export const morningOnlyDates = generateDateRange(
  `${currentYear}-06-30`, // Start date
  `${currentYear}-07-26` // End date
)
```

### 2. Summer Vacation Period

**Current**: July 26 - August 31

To change the vacation period, edit `config/vacation.ts`:

```typescript
const tartaytantasVacations = generateDateRange(
  `${currentYear}-07-26`, // Start date
  `${currentYear}-08-31` // End date
)
```

### 3. Regional Holidays

Update `currentYearRegionalHolidays` in `config/vacation.ts`:

```typescript
const currentYearRegionalHolidays: string[] = [
  '04-16', // Easter Monday
  '04-17', // Easter Tuesday
  // Add or remove as needed
]
```

## Benefits

### Before (Manual)

```typescript
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
  // ... 20+ more manual entries
]
```

### After (Simple Generator)

```typescript
export const morningOnlyDates = generateDateRange(
  `${currentYear}-06-30`,
  `${currentYear}-07-26`
)
```

## Maintenance

- **Yearly**: Update regional holidays in `vacation.ts`
- **As needed**: Change date ranges in both files
- **Never**: Manually list individual dates
