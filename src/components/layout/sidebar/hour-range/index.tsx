import { useSchedule } from "@/contexts/ScheduleContext";
import { cn } from "@/lib/utils";
import { Button } from "../../../ui/button";

const MORNING_HOURS = ["09:00", "10:00", "11:00", "12:00"];
const AFTERNOON_HOURS = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const NIGHT_HOURS = ["19:00", "20:00", "21:00"];

export function HourRange() {
  const {
    selectedTime,
    setSelectedTime,
    selectedDate,
    isTimeSlotAvailable,
    errors,
  } = useSchedule();

  const handleTimeClick = (time: string) => {
    if (isTimeSlotAvailable(time, selectedDate)) {
      setSelectedTime(time === selectedTime ? undefined : time);
    }
  };

  const isDisabled = (time: string) => !isTimeSlotAvailable(time, selectedDate);

  return (
    <section className="flex flex-col mt-2 gap-3 w-full">
      <span className="text-title-md font-bold text-gray-200">Horários</span>

      <section className="flex flex-col gap-1.5">
        <span className="text-title-sm text-gray-300">Manhã</span>
        <div className="flex flex-wrap gap-2">
          {MORNING_HOURS.map((time) => (
            <Button
              key={time}
              disabled={isDisabled(time)}
              onClick={() => handleTimeClick(time)}
              className={cn(
                selectedTime === time && "border-yellow border text-yellow"
              )}
            >
              {time}
            </Button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-1.5">
        <span className="text-title-sm text-gray-300">Tarde</span>
        <div className="flex flex-wrap gap-2">
          {AFTERNOON_HOURS.map((time) => (
            <Button
              key={time}
              disabled={isDisabled(time)}
              onClick={() => handleTimeClick(time)}
              className={cn(
                selectedTime === time && "border-yellow border text-yellow"
              )}
            >
              {time}
            </Button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-1.5">
        <span className="text-title-sm text-gray-300">Noite</span>
        <div className="flex flex-wrap gap-2">
          {NIGHT_HOURS.map((time) => (
            <Button
              key={time}
              disabled={isDisabled(time)}
              onClick={() => handleTimeClick(time)}
              className={cn(
                selectedTime === time && "border-yellow border text-yellow"
              )}
            >
              {time}
            </Button>
          ))}
        </div>
        {errors.time && (
          <span className="mt-1 text-xs text-red-500">
            Por favor, selecione um horário
          </span>
        )}
      </section>
    </section>
  );
}
