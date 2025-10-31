import { DatePickerSchedule } from "./date-picker-schedule"
import { ScheduleTables } from "./morning-table"

export function Schedules() {
  return (
    <section className="flex flex-col px-18 py-22 gap-10">
      <section className="flex flex-row items-center justify-between">
        <section className="flex flex-col gap-2">
          <h1 className="text-title-lg font-bold flex flex-row items-start justify-start">
            Sua agenda
          </h1>
          <p className="text-gray-300 text-sm">
            Consulte os seus cortes de cabelo agendados por dia
          </p>
        </section>
        <section>
          <DatePickerSchedule />
        </section>
      </section>
      <section>
        <ScheduleTables />
      </section>
    </section>
  )
}
