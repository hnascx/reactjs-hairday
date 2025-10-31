import { Schedules } from "./components/layout/schedules"
import { Sidebar } from "./components/layout/sidebar"

export function App() {
  return (
    <section className="bg-gray-900 text-gray-100 text-base">
      <section className="grid grid-cols-[1.45fr_2fr] min-h-screen max-w-6xl mx-auto py-3">
        <Sidebar />
        <Schedules />
      </section>
    </section>
  )
}
