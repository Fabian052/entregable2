import './styles/Loadder.css'

const Loadder = () => {
  return (
    <div className="absolute w-full h-[85%]">
      <div>
        <img src="https://www.hindustantimes.com/ht-img/img/2023/02/27/550x309/sukuna_yuji_megumi_1677495818575_1677495829538_1677495829538.png" alt="Not load img" className='object-cover h-[90%] w-full' />
      </div>

      <div className="flex justify-center items-center h-[15%]">
        <div className="spinner">
          <div className="spinnerin"></div>
        </div>
      </div>
    </div>
  )
}
export default Loadder