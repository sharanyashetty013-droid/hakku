export const offences = [
  { id: 'theft', years: 3 },
  { id: 'hurt', years: 1 },
  { id: 'cheating', years: 7 },
  { id: 'intimidation', years: 2 },
  { id: 'life', years: null },
] as const

export type OffenceId = (typeof offences)[number]['id']
