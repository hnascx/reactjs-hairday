import { createContext, useContext, useEffect, useState } from "react";
import type { Appointment } from "../types/schedule";
import { normalizeDateToString } from "../lib/date-utils";

interface ScheduleContextData {
  appointments: Appointment[];
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  clientName: string;
  scheduleViewDate: Date | undefined;
  errors: {
    date: boolean;
    time: boolean;
    clientName: boolean;
  };
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedTime: (time: string | undefined) => void;
  setClientName: (name: string) => void;
  setScheduleViewDate: (date: Date | undefined) => void;
  addAppointment: () => boolean;
  deleteAppointment: (id: string) => void;
  isTimeSlotAvailable: (time: string, date: Date | undefined) => boolean;
  clearForm: () => void;
}

const ScheduleContext = createContext<ScheduleContextData>(
  {} as ScheduleContextData
);

const STORAGE_KEY = "@hairday:appointments";

export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    () => new Date()
  );

  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined
  );

  const [clientName, setClientName] = useState("");

  const [scheduleViewDate, setScheduleViewDate] = useState<Date | undefined>(
    () => new Date()
  );

  const [errors, setErrors] = useState({
    date: false,
    time: false,
    clientName: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (appointments.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    }
  }, [appointments]);

  const getPeriodFromTime = (
    time: string
  ): "morning" | "afternoon" | "night" => {
    const hour = parseInt(time.split(":")[0]);
    if (hour >= 9 && hour <= 12) return "morning";
    if (hour >= 13 && hour <= 18) return "afternoon";
    return "night";
  };

  const isTimeSlotAvailable = (
    time: string,
    date: Date | undefined
  ): boolean => {
    if (!date) return true;

    const dateString = normalizeDateToString(date);
    return !appointments.some(
      (apt) => apt.date === dateString && apt.time === time
    );
  };

  const clearForm = () => {
    setSelectedDate(new Date());
    setSelectedTime(undefined);
    setClientName("");
    setErrors({
      date: false,
      time: false,
      clientName: false,
    });
  };

  const addAppointment = (): boolean => {
    const newErrors = {
      date: !selectedDate,
      time: !selectedTime,
      clientName: clientName.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.date || newErrors.time || newErrors.clientName) {
      return false;
    }

    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      clientName: clientName.trim(),
      date: normalizeDateToString(selectedDate!),
      time: selectedTime!,
      period: getPeriodFromTime(selectedTime!),
    };

    setAppointments((prev) => [...prev, newAppointment]);

    setScheduleViewDate(selectedDate);

    clearForm();
    return true;
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  };

  return (
    <ScheduleContext.Provider
      value={{
        appointments,
        selectedDate,
        selectedTime,
        clientName,
        scheduleViewDate,
        errors,
        setSelectedDate,
        setSelectedTime,
        setClientName,
        setScheduleViewDate,
        addAppointment,
        deleteAppointment,
        isTimeSlotAvailable,
        clearForm,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("useSchedule must be used within a ScheduleProvider");
  }
  return context;
}
