
import './App.css'

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-center text-3xl'>Calculator</h1>
      <div className='p-2 h-[500px] w-[400px] bg-green-400/50 rounded-lg sm:w-[350px]'>
        <div>
          <input type="text" className='h-[3rem] w-[100%] rounded-lg mt-4' />
        </div>
        <div className='grid grid-cols-4 gap-8 p-4'>
          <button className='bg-white col-span-2 rounded-xl h-[50px] font-extrabold text-[30px]'>Ac</button>
          <button className='bg-white col-span-2 rounded-xl h-[50px] font-extrabold text-[30px]'>Del</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>7</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>8</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>9</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>/</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>4</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>5</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>6</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>*</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>1</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>2</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>3</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>-</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>.</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>=</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>0</button>
          <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]'>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
