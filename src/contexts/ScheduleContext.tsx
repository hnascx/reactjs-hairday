import { createContext, useContext, useEffect, useState } from "react";
import type { Appointment } from "../types/schedule";

interface ScheduleContextData {
  appointments: Appointment[];
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  clientName: string;
  errors: {
    date: boolean;
    time: boolean;
    clientName: boolean;
  };
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedTime: (time: string | undefined) => void;
  setClientName: (name: string) => void;
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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined
  );
  const [clientName, setClientName] = useState("");
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
    if (appointments.length > 0) {
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

    const dateString = date.toISOString().split("T")[0];
    return !appointments.some(
      (apt) => apt.date === dateString && apt.time === time
    );
  };

  const clearForm = () => {
    setSelectedDate(undefined);
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
      date: selectedDate!.toISOString().split("T")[0],
      time: selectedTime!,
      period: getPeriodFromTime(selectedTime!),
    };

    setAppointments((prev) => [...prev, newAppointment]);
    clearForm();
    return true;
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));

    const updated = appointments.filter((apt) => apt.id !== id);
    if (updated.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <ScheduleContext.Provider
      value={{
        appointments,
        selectedDate,
        selectedTime,
        clientName,
        errors,
        setSelectedDate,
        setSelectedTime,
        setClientName,
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
