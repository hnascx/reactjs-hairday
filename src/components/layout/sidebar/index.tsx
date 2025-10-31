import { ClientSection } from "@/components/ui/client-section"
import { DatePicker } from "@/components/ui/date-picker"
import { HourRange } from "@/components/ui/hour-range"

export function Sidebar() {
  return (
    <aside className="relative flex flex-col items-center justify-center bg-gray-700 rounded-xl px-18 py-20">
      <img
        src="/src/styles/assets/hairday-logo.svg"
        alt="Hair Day Logo"
        className="absolute -left-3 -top-3 z-50 pointer-events-none w-auto h-[56px] max-w-[139px] select-none bg-gray-600 rounded-br-xl px-5"
        draggable={false}
      />
      <div className="flex flex-col items-start justify-start gap-5">
        <section className="flex flex-col gap-2">
          <h1 className="text-title-lg font-bold flex flex-row items-start justify-start">
            Agende um atendimento
          </h1>
          <p className="text-gray-300 text-sm">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento.
          </p>
        </section>
        <DatePicker />
        <HourRange />
        <ClientSection />
      </div>
    </aside>
  )
}
