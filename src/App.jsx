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
          <p className='text-sm mt-6 font-bold text-justify w-10/12 inline-block uppercase scale-y-200 origin-bottom'>Monero ermitaño tapatío</p>
          <p className='text-sm  w-11/12 text-justify'>- Animador profesional</p>
          <p className='text-sm  w-full '>- Residente en: <span className="text-azuloblea font-semibold">Casa del Autor de ZPN</span></p>
          <p className='text-sm  w-11/12 text-justify'>- Fanzines, Prints, Stickers y más</p>
        </div>
        <div className='mx-auto '>
          <div className='mb-1 flex justify-around w-11/12 mx-auto'>
            <img src="/images/icons/arroba.png" alt="" className='w-6' />
            <a href="https://www.instagram.com/_oblea_/"><img src="/images/icons/instagram.png" alt="" className='w-6' /></a>
            <img src="/images/icons/whatsapp.png" alt="" className='w-6' />

          </div>




          <div className='border-2 border-black/50 rounded-xl p-2 '>
            <img src="/images/dibujos/nbaruck.png" alt="" className='h-36 mx-auto' />
          </div>
        </div>
      </section>




      <section className=' w-full mt-3'>
        <div class="grid grid-cols-3 gap-2 ">
          <div className='col-span-2  border-2 border-black/50 rounded-xl px-2 font-semibold'>

            <h3 className='mb-2 text-sm'>Garabatos Mafufos</h3>
            <img src="/images/dibujos/fondo1.png" alt="" className='h-52 mx-auto' />
          </div>

          <div className='border-2 border-black/50 rounded-xl px-2 font-semibold'>

            <h3 className='mb-2 text-sm'>Monos</h3>
            <img src="/images/dibujos/taika.png" alt="" className='h-52 mx-auto' />
            <p className='text-xs font-normal text-center'>Taika</p>
          </div>





        </div>






        <div className='grid grid-cols-1 mt-2'>
          <div className='border-2 border-black/50 rounded-xl p-2 font-semibold'>

            <img src="/images/dibujos/nepo1.png" alt="" className='h-52 w-6/12 mx-auto' />
          </div>

        </div>

      </section>


    </div>
  );

}

export default App
