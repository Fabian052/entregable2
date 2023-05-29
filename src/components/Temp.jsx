const Temp = ({tempInfo}) => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 rounded-3xl p-2 py-5 grid grid-cols-3 justify-items-center sm:grid-cols-1 items-center">
      <article className="flex gap-1 sm:gap-2">
        <div>
          <img src="/images/wind.png" alt="sorry not load" />
        </div>
        <span>{tempInfo.wind.speed}m/s</span>
      </article>

      <article className="flex gap-1 sm:gap-2">
        <div>
          <img src="/images/humidity.png" alt="sorry not load" />
        </div>
        <span>{tempInfo.main.humidity}%</span>
      </article>

      <article className="flex sm:gap-2">
        <div>
          <img src="/images/pressure.png" alt="sorry not load" />
        </div>
        <span>{tempInfo.main.pressure}hpa</span>
      </article>
    </section>
  )
}
export default Temp