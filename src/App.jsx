import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-stone-300  text-black flex flex-col items-center p-3">
      <section className=' w-full flex mt-4 '>
        <div className='w-8/12 my-auto  '>
          <h1 className="text-6xl font-bold">
            <span className="inline-block scale-y-150 origin-bottom">_oblea_</span>
          </h1>
          <p className='text-sm mt-8 font-bold text-justify w-10/12 inline-block uppercase scale-y-200 origin-bottom'>Monero ermitaño tapatío</p>
          <p className='text-xs font-semibold w-11/12 text-justify'>Creador de personajes como Nepo, Taika, Pomodoro, Totopo y mucho más. </p>
        </div>
        <div className='mx-auto '>
          <div className='border-2 border-black/50 rounded-xl p-2 '>
            <img src="/images/dibujos/nbaruck.png" alt="" className='h-32 mx-auto'/>
          </div>
        </div>
      </section>




      <section className=' w-full mt-4'>
        <div class="grid grid-cols-3 gap-2 ">
          <div className='col-span-2  border-2 border-black/50 rounded-xl p-2 font-semibold'>

            <h3 className='mb-2 text-sm'>Garabatos Mafufos</h3>
            <img src="/images/dibujos/fondo1.png" alt="" className='h-52 mx-auto' />
            <hr className="my-2 border-t border-black/50" />
            <p className='text-xs font-normal'>Lorem ipsum dolor sit amet consecelit.</p>
          </div>

          <div className='border-2 border-black/50 rounded-xl p-2 font-semibold'>

            <h3 className='mb-2 text-sm'>Make Mistakes</h3>
            <img src="/images/smoking2.png" alt="" className='h-52 mx-auto' />
            <hr className="my-2 border-t border-black/50" />
            <p className='text-xs font-normal'>Lorem ipsum.</p>
          </div>





        </div>






        <div className='grid grid-cols-1 mt-2'>
          <div className='border-2 border-black/50 rounded-xl p-2 font-semibold'>

            <img src="/images/dibujos/nepo1.png" alt="" className='h-52 w-6/12 mx-auto' />
            <hr className="my-2 border-t border-black/50" />
            <p className='text-xs font-normal'>Lorem ipsum dolor sit amet consecelit.</p>
          </div>

        </div>

      </section>


    </div>
  );

}

export default App
