import { Schedules } from "./components/layout/schedules";
import { Sidebar } from "./components/layout/sidebar";
import { ScheduleProvider } from "./contexts/ScheduleContext";

export function App() {
  return (
    <ScheduleProvider>
      <section className="bg-gray-900 text-gray-100 text-base">
        <section className="grid grid-cols-1 lg:grid-cols-[1.45fr_2fr] min-h-screen max-w-6xl mx-auto py-3 px-4 gap-4 lg:gap-0 lg:px-0">
          <Sidebar />
          <Schedules />
        </section>
      </section>
    </ScheduleProvider>
  );
}
