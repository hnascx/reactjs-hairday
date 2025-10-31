import { Button } from "../../../ui/button"

export function HourRange() {
  return (
    <section className="flex flex-col mt-2 gap-3">
      <span className="text-title-md font-bold text-gray-200">Horários</span>

      <section className="flex flex-col gap-1.5">
        <span className="text-title-sm text-gray-300">Manhã</span>
        <div className="flex flex-wrap gap-2">
          <Button>09:00</Button>
          <Button>10:00</Button>
          <Button disabled>11:00</Button>
          <Button>12:00</Button>
        </div>
      </section>
      <section className="flex flex-col gap-1.5">
        <span className="text-title-sm text-gray-300">Tarde</span>
        <div className="flex flex-wrap gap-2">
          <Button disabled>13:00</Button>
          <Button disabled>14:00</Button>
          <Button>15:00</Button>
          <Button disabled>16:00</Button>
          <Button disabled>17:00</Button>
          <Button>18:00</Button>
        </div>
      </section>
      <section className="flex flex-col gap-1.5">
        <span className="text-title-sm text-gray-300">Noite</span>
        <div className="flex flex-wrap gap-2">
          <Button>19:00</Button>
          <Button>20:00</Button>
          <Button disabled>21:00</Button>
        </div>
      </section>
    </section>
  )
}
