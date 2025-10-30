import { DatePicker } from "@/components/ui/date-picker"

export function Sidebar() {
  return (
    <aside className="bg-gray-700 rounded-xl px-19 py-22">
      <div className="flex flex-col items-start justify-start gap-6">
        <section className="flex flex-col gap-3">
          <h1 className="text-title-lg font-bold flex flex-row items-start justify-start">
            Agende um atendimento
          </h1>
          <p className="text-gray-300 text-sm">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento.
          </p>
        </section>
        <section className="flex flex-col gap-2.5">
          <span className="text-title-md font-bold">Data</span>
          <DatePicker />
        </section>
      </div>
    </aside>
  )
}
