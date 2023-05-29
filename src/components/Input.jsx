const Input = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex rounded-md overflow-hidden ">
        <input id='city' className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 text-black p-2 outline-none" placeholder='Name city...'/>
        <button  className='bg-gradient-to-r from-blue-400 via-blue-300 to-blue-600' >Search</button>
      </div>
    </form>
  )
}
export default Input
