import { Schedules } from "./components/layout/schedules"
import { Sidebar } from "./components/layout/sidebar"

export function App() {
  return (
    <section className="bg-gray-900 text-gray-100 text-base">
      <div className="grid grid-cols-[1fr_2fr] min-h-screen max-w-6xl mx-auto">
        <Sidebar />
        <Schedules />
      </div>
    </section>
  )
}
