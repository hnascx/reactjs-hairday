import { ClientSection } from "@/components/layout/sidebar/client-section";
import { DatePicker } from "@/components/layout/sidebar/date-picker";
import { HourRange } from "@/components/layout/sidebar/hour-range";

export function Sidebar() {
  return (
    <aside className="relative flex flex-col items-center justify-center bg-gray-700 rounded-xl px-6 sm:px-12 lg:px-18 py-12 lg:py-22">
      <img
        src="/src/styles/assets/hairday-logo.svg"
        alt="Hair Day Logo"
        className="absolute -left-3 -top-3 z-50 pointer-events-none w-auto h-[40px] sm:h-[56px] max-w-[100px] sm:max-w-[139px] select-none bg-gray-600 rounded-br-xl px-3 sm:px-5"
        draggable={false}
      />
      <div className="flex flex-col items-start justify-start gap-4 sm:gap-6 w-full">
        <section className="flex flex-col gap-2">
          <h1 className="text-title-lg font-bold flex flex-row items-start justify-start">
            Agende um atendimento
          </h1>
          <p className="text-gray-300 text-sm">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento.
          </p>
        </section>
        <section className="flex flex-col gap-3 w-full">
          <span className="text-title-md font-bold text-gray-200">Data</span>
          <DatePicker />
        </section>
        <HourRange />
        <ClientSection />
      </div>
    </aside>
  );
}
