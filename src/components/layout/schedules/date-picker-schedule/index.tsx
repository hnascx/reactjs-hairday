import { CalendarIcon, ChevronDownIcon } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerSchedule() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="datePickerButton"
            size="sm"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="-ml-1.5 size-4.25 text-yellow" />
              {date
                ? date.toLocaleDateString("pt-BR", {
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
            selected={date}
            defaultMonth={date || new Date()}
            captionLayout="dropdown"
            fromYear={new Date().getFullYear()}
            toYear={new Date().getFullYear() + 4}
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
