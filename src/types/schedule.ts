export interface Appointment {
  id: string
  clientName: string
  date: string
  time: string
  period: 'morning' | 'afternoon' | 'night'
}

export type TimeSlot = {
  time: string
  period: 'morning' | 'afternoon' | 'night'
}
