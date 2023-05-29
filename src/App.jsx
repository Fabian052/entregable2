import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Input from './components/Input'
import Loadder from './components/Loadder'

const weatherImages = {
  '01d': "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/green-field-over-blue-clear-sky-da-kuk.jpg", 
  '01n': "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/green-field-over-blue-clear-sky-da-kuk.jpg",

  '02d': "https://e0.pxfuel.com/wallpapers/514/997/desktop-wallpaper-clouds-blue-sky-with-few-clouds-background-dark-blue-clouds.jpg",
  '02n': "https://e0.pxfuel.com/wallpapers/514/997/desktop-wallpaper-clouds-blue-sky-with-few-clouds-background-dark-blue-clouds.jpg",

  '03d': "https://images.squarespace-cdn.com/content/v1/5d4c63022fdc0f0001a31f58/1565863502860-U636YZGVWKQJ47331LG6/cloud+dark+blue.jpg?format=2500w",
  '03n': "https://images.squarespace-cdn.com/content/v1/5d4c63022fdc0f0001a31f58/1565863502860-U636YZGVWKQJ47331LG6/cloud+dark+blue.jpg?format=2500w",

  '04d': "https://drscdn.500px.org/photo/207699803/m%3D900/17924413051b7334ab34b58a534a476e",
  '04n': "https://drscdn.500px.org/photo/207699803/m%3D900/17924413051b7334ab34b58a534a476e",

  '09d': "https://static.toiimg.com/thumb/msid-100116842,imgsize-1858987,width-400,resizemode-4/100116842.jpg",
  '09n': "https://static.toiimg.com/thumb/msid-100116842,imgsize-1858987,width-400,resizemode-4/100116842.jpg",

  '10d': "https://assets-global.website-files.com/621e749a546b7592125f38ed/6227e2cc28dc8e194473d9ff_Nowcasting.jpg",
  '10n': "https://assets-global.website-files.com/621e749a546b7592125f38ed/6227e2cc28dc8e194473d9ff_Nowcasting.jpg",

  '11d': "https://www.farmersalmanac.com/wp-content/uploads/2020/11/Best-Places-Cities-Lightning-A193502306.jpg",
  '11n': "https://www.farmersalmanac.com/wp-content/uploads/2020/11/Best-Places-Cities-Lightning-A193502306.jpg",

  '13d': "https://www.wkbn.com/wp-content/uploads/sites/48/2021/01/winter-snow-snowing-snowy-winter-weather-generic-2.jpg?w=900",
  '13n': "https://www.wkbn.com/wp-content/uploads/sites/48/2021/01/winter-snow-snowing-snowy-winter-weather-generic-2.jpg?w=900",

  '50d': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHq_9bzhKtWG8tGU0Janh23kFWoHlF8zNMJj0Y1H3ZE3Y9fGqtbOUU7zL3bXkNXmI_CM0&usqp=CAU",
  '50n': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHq_9bzhKtWG8tGU0Janh23kFWoHlF8zNMJj0Y1H3ZE3Y9fGqtbOUU7zL3bXkNXmI_CM0&usqp=CAU"
}

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const city = event.target.city.value
    const KEY = 'b329b109e683c92d2f6623b9b7b4a954'

    const URL_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`

    axios.get(URL_CITY)
      .then(({ data }) => setWeatherInfo(data))
      .catch(err => console.error(err))
  }

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = 'b329b109e683c92d2f6623b9b7b4a954'

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className='relative min-h-screen flex justify-center items-center font-principal-font p-2'>

      <div className="bg-black/70 absolute w-full h-full">
        <div className='absolute w-full h-full bg-black/30'></div>
        <img src={weatherImages[weatherInfo?.weather[0].icon]} className='w-full h-full object-cover'/>
      </div>

      <section className='relative grid gap-8 justify-items-center'>
        <Input handleSubmit={handleSubmit} />
        {
          weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loadder />
        }
      </section>
      
    </main>
  )
}

export default App
