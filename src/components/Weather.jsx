import { useState } from "react"
import Temp from "./Temp"
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp"

const Weather = ({ weatherInfo }) => {

  const [isCelsius, setIsCelsius] = useState(!true)

  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius)
  }

  return (
    <section className="text-center grid gap-8">
      <h2 className="font-bold text-2xl text-white drop-shadow-[-4px_4px_1px_rgba(0,0,0,0.25)]">{weatherInfo.name}, {weatherInfo.sys.country}</h2>
      <section className="grid gap-4 sm:grid-cols-2 sm:grid-cols-[1fr_auto]">

        {/* sección superior */}
        <article className="bg-gradient-to-b from-blue-800 via-blue-600 p-2 rounded-3xl grid grid-cols-2 items-center">
          <h3 className="col-span-2 capitalize">{weatherInfo.weather[0].description}</h3>
          <span className="text-4xl">{isCelsius ? kelvinToCelsius(weatherInfo.main.temp) : kelvinToFahrenheit(weatherInfo.main.temp)}</span>

          <div>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`} alt="" />
          </div>
        </article>

        {/* sección inferior */}
        <Temp tempInfo={weatherInfo} />
      </section>

      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 max-w-max p-1 px-3 rounded-lg" onClick={handleChangeTemp}>Change C / F</button>
      </div>
    </section>
  )
}
export default Weather