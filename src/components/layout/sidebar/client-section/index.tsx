import { useSchedule } from "@/contexts/ScheduleContext";
import { SquareUserIcon } from "lucide-react";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";

export function ClientSection() {
  const { clientName, setClientName, addAppointment, errors } = useSchedule();

  const handleSchedule = () => {
    const success = addAppointment();
    if (success) {
      // Opcional: adicionar toast de sucesso aqui
      console.log("Agendamento realizado com sucesso!");
    }
  };

  return (
    <section className="flex flex-col mt-2 gap-2">
      <span className="text-title-md font-bold text-gray-200">Cliente</span>
      <div className="relative">
        <SquareUserIcon className="size-4.5 text-yellow absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <Input
          placeholder="Nome do cliente"
          className="pl-9"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </div>
      {errors.clientName && (
        <span className="text-xs text-red-500">
          Por favor, preencha o nome do cliente
        </span>
      )}
      <Button
        variant="bookClientButton"
        size="lg"
        className="mt-4"
        onClick={handleSchedule}
      >
        Agendar
      </Button>
    </section>
  );
}
