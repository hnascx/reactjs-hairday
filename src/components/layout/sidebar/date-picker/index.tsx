import { CalendarIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { useSchedule } from "@/contexts/ScheduleContext"

export function DatePicker() {
  const [open, setOpen] = useState(false)
  const { selectedDate, setSelectedDate, errors } = useSchedule()

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="datePickerButton"
            size="md"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="-ml-1.5 size-4.25 text-yellow" />
              {selectedDate
                ? selectedDate.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "Selecione a data"}
            </div>
            <ChevronDownIcon className="-mr-1.75" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            defaultMonth={selectedDate || new Date()}
            captionLayout="dropdown"
            fromYear={new Date().getFullYear()}
            toYear={new Date().getFullYear() + 4}
            onSelect={(date) => {
              setSelectedDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
      {errors.date && (
        <span className="-mt-1 text-xs text-red-500">
          Por favor, selecione uma data
        </span>
      )}
    </div>
  )
}
