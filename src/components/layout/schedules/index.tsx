import { DatePickerSchedule } from "./date-picker-schedule"
import { ScheduleTables } from "./schedule-tables"

export function Schedules() {
  return (
    <section className="flex flex-col px-4 sm:px-8 lg:px-18 py-8 sm:py-12 lg:py-22 gap-6 sm:gap-10">
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <section className="flex flex-col gap-2">
          <h1 className="text-title-lg font-bold flex flex-row items-start justify-start">
            Sua agenda
          </h1>
          <p className="text-gray-300 text-sm">
            Consulte os seus cortes de cabelo agendados por dia
          </p>
        </section>
        <section className="w-full sm:w-auto">
          <DatePickerSchedule />
        </section>
      </section>
      <section>
        <ScheduleTables />
      </section>
    </section>
  )
}
