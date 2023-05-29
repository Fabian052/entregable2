import './styles/Loadder.css'

const Loadder = () => {
  return (
    <div className="absolute w-full h-full">
      <div className='bg-[url("https://www.hindustantimes.com/ht-img/img/2023/02/27/550x309/sukuna_yuji_megumi_1677495818575_1677495829538_1677495829538.png")] bg-cover w-full h-full'>
        <div className="spinner">
          <div className="spinnerin"></div>
        </div>
      </div>
    </div>
  )
}
export default Loadder