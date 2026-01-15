import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSchedule } from "@/contexts/ScheduleContext";
import { normalizeDateToString } from "@/lib/date-utils";
import { CloudSun, MoonStar, Sunrise, Trash2 } from "lucide-react";
import { useMemo } from "react";

export function ScheduleTables() {
  const { appointments, deleteAppointment, scheduleViewDate } = useSchedule();

  const groupedAppointments = useMemo(() => {
    const filteredAppointments = scheduleViewDate
      ? appointments.filter((apt) => {
          const aptDate = apt.date;
          const viewDate = normalizeDateToString(scheduleViewDate);
          return aptDate === viewDate;
        })
      : appointments;

    return {
      morning: filteredAppointments
        .filter((apt) => apt.period === "morning")
        .sort((a, b) => a.time.localeCompare(b.time)),
      afternoon: filteredAppointments
        .filter((apt) => apt.period === "afternoon")
        .sort((a, b) => a.time.localeCompare(b.time)),
      night: filteredAppointments
        .filter((apt) => apt.period === "night")
        .sort((a, b) => a.time.localeCompare(b.time)),
      totalFiltered: filteredAppointments.length,
    };
  }, [appointments, scheduleViewDate]);

  return (
    <div className="flex flex-col gap-3">
      {groupedAppointments.morning.length > 0 && (
        <Card className="border-gray-600">
          <CardHeader className="flex flex-row items-center justify-between border-b border-gray-600 h-2 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <Sunrise className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-300">Manhã</span>
            </div>
            <span className="text-sm text-gray-400">09h-12h</span>
          </CardHeader>
          <CardContent className="p-0">
            {groupedAppointments.morning.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between px-4 sm:px-6 py-1.5 gap-2"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <span className="text-title-md font-bold text-gray-200 time-display">
                    {appointment.time}
                  </span>
                  <span className="text-gray-200 text-sm sm:text-base truncate">
                    {appointment.clientName}
                  </span>
                </div>
                <Button
                  variant="deleteButton"
                  size="deleteButton"
                  onClick={() => deleteAppointment(appointment.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {groupedAppointments.afternoon.length > 0 && (
        <Card className="border-gray-600">
          <CardHeader className="flex flex-row items-center justify-between border-b border-gray-600 h-2 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <CloudSun className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-300">Tarde</span>
            </div>
            <span className="text-sm text-gray-400">13h-18h</span>
          </CardHeader>
          <CardContent className="p-0">
            {groupedAppointments.afternoon.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between px-4 sm:px-6 py-1.5 gap-2"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <span className="text-title-md font-bold text-gray-200 time-display">
                    {appointment.time}
                  </span>
                  <span className="text-gray-200 text-sm sm:text-base truncate">
                    {appointment.clientName}
                  </span>
                </div>
                <Button
                  variant="deleteButton"
                  size="deleteButton"
                  onClick={() => deleteAppointment(appointment.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {groupedAppointments.night.length > 0 && (
        <Card className="border-gray-600">
          <CardHeader className="flex flex-row items-center justify-between border-b border-gray-600 h-2 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <MoonStar className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-300">Noite</span>
            </div>
            <span className="text-sm text-gray-400">19h-21h</span>
          </CardHeader>
          <CardContent className="p-0">
            {groupedAppointments.night.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between px-4 sm:px-6 py-1.5 gap-2"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <span className="text-title-md font-bold text-gray-200 time-display">
                    {appointment.time}
                  </span>
                  <span className="text-gray-200 text-sm sm:text-base truncate">
                    {appointment.clientName}
                  </span>
                </div>
                <Button
                  variant="deleteButton"
                  size="deleteButton"
                  onClick={() => deleteAppointment(appointment.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {groupedAppointments.totalFiltered === 0 && (
        <div className="flex items-center justify-center py-6 sm:py-8 lg:py-12">
          <p className="text-gray-400 text-sm">Nenhum agendamento encontrado</p>
        </div>
      )}
    </div>
  );
}
