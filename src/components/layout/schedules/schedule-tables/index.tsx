import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CloudSun, MoonStar, Sunrise, Trash2 } from "lucide-react"

export function ScheduleTables() {
  return (
    <div className="flex flex-col gap-3">
      <Card className="border-gray-600">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-600 h-2">
          <div className="flex items-center gap-3">
            <Sunrise className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-300">Manhã</span>
          </div>
          <span className="text-sm text-gray-400">09h-12h</span>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-between px-6 py-1">
            <div className="flex items-center gap-6">
              <span className="text-title-md font-bold text-gray-200">
                11:00
              </span>
              <span className="text-gray-200">Ryan Dorwart</span>
            </div>
            <Button variant="deleteButton" size="deleteButton">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-600">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-600 h-2">
          <div className="flex items-center gap-3">
            <CloudSun className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-300">Tarde</span>
          </div>
          <span className="text-sm text-gray-400">13h-18h</span>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-6">
              <span className="text-title-md font-bold text-gray-200">
                13:00
              </span>
              <span className="text-gray-200">Livia Curtis</span>
            </div>
            <Button variant="deleteButton" size="deleteButton">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-6">
              <span className="text-title-md font-bold text-gray-200">
                14:00
              </span>
              <span className="text-gray-200">Randy Calzoni</span>
            </div>
            <Button variant="deleteButton" size="deleteButton">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-6">
              <span className="text-title-md font-bold text-gray-200">
                16:00
              </span>
              <span className="text-gray-200">Marley Franci</span>
            </div>
            <Button variant="deleteButton" size="deleteButton">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-6">
              <span className="text-title-md font-bold text-gray-200">
                17:00
              </span>
              <span className="text-gray-200">Jaylon Korsgaard</span>
            </div>
            <Button variant="deleteButton" size="deleteButton">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-600">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-600 h-2">
          <div className="flex items-center gap-3">
            <MoonStar className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-300">Noite</span>
          </div>
          <span className="text-sm text-gray-400">19h-21h</span>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-between px-6 py-1">
            <div className="flex items-center gap-6">
              <span className="text-title-md font-bold text-gray-200">
                21:00
              </span>
              <span className="text-gray-200">Maria Herwitz</span>
            </div>
            <Button variant="deleteButton" size="deleteButton">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
