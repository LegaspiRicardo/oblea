import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // --- Lógica Carrusel "Monos" (Deslizamiento infinito) ---
  const monosImages = [
    '/images/dibujos/taika.png',
    '/images/dibujos/zorro.png',
    '/images/dibujos/nepo3.png',
    '/images/dibujos/michoacanabn.png',
  ]
  const extendedMonosImages = [...monosImages, monosImages[0]]

  const [currentMonoIndex, setCurrentMonoIndex] = useState(0)
  const [isMonoTransitioning, setIsMonoTransitioning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMonoTransitioning(true)
      setCurrentMonoIndex((prevIndex) => prevIndex + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleMonoTransitionEnd = () => {
    if (currentMonoIndex === monosImages.length) {
      setIsMonoTransitioning(false)
      setCurrentMonoIndex(0)
    }
  }

  const mafufosGrid = [
    '/images/dibujos/fondo1.png',
    '/images/dibujos/fondo2.png',
    '/images/dibujos/fondo3.png',
    '/images/dibujos/fondo4.png',
  ]

  const [mafufosStep, setMafufosStep] = useState(0)


  const currentRotation = mafufosStep * -90

  useEffect(() => {
    const interval = setInterval(() => {
      setMafufosStep((prev) => prev + 1)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-stone-300 text-black flex flex-col items-center p-3">
      <section className='w-full flex mt-4'>
        <div className='w-8/12 my-auto'>
          <h1 className="text-6xl font-bold">
            <span className="inline-block scale-y-150 origin-bottom">_oblea_</span>
          </h1>
          <p className='text-sm mt-6 font-bold text-justify w-10/12 inline-block uppercase scale-y-200 origin-bottom'>Monero ermitaño tapatío</p>
          <p className='text-sm w-11/12 text-justify'>- Animador profesional</p>
          <p className='text-sm w-full'>- Residente en: <span className="text-azuloblea font-semibold">Casa del Autor de ZPN</span></p>
          <p className='text-sm w-11/12 text-justify'>- Fanzines, Prints, Stickers y más</p>
        </div>
        <div className='mx-auto'>
          <div className='mb-1 flex justify-around w-11/12 mx-auto'>
            <img src="/images/icons/arroba.png" alt="" className='w-6' />
            <a href="https://www.instagram.com/_oblea_/"><img src="/images/icons/instagram.png" alt="" className='w-6' /></a>
            <img src="/images/icons/whatsapp.png" alt="" className='w-6' />
          </div>

          <div className='border-2 border-black/50 rounded-xl p-2'>
            <img src="/images/dibujos/nbaruck.png" alt="" className='h-36 mx-auto' />
          </div>
        </div>
      </section>

      <section className='w-full mt-3'>
        <div className="grid grid-cols-3 gap-2">
          
          {/* Garabatos Mafufos: Rotación continua por cuadrantes */}
          <div className='col-span-2 border-2 border-black/50 rounded-xl px-1 font-semibold overflow-hidden flex flex-col'>
            <h3 className='mb-2 text-sm w-11/12 mx-auto'>GARABATOS MAFUFOS</h3>
            
            <div className='relative h-52 w-full overflow-hidden my-auto'>
              <div
                className='absolute w-[200%] h-[200%] grid grid-cols-2 grid-rows-2 transition-transform duration-1500 ease-in-out gap-4'
                style={{
                  transform: `rotate(${currentRotation}deg)`,
                  transformOrigin: '50% 50%'
                }}
              >
                {/* Cuadrante 1 */}
                <div className='w-full h-full flex items-center justify-center'>
                  <img src={mafufosGrid[0]} alt="Garabato 1" className='h-52 mx-auto rounded-xl' />
                </div>
                {/* Cuadrante 2 (Gira 90° sobre sí misma para quedar derechita al entrar) */}
                <div className='w-full h-full flex items-center justify-center rotate-90'>
                  <img src={mafufosGrid[1]} alt="Garabato 2" className='h-52 mx-auto rounded-xl' />
                </div>
                {/* Cuadrante 4 (Gira -90° sobre sí misma) */}
                <div className='w-full h-full flex items-center justify-center -rotate-90'>
                  <img src={mafufosGrid[3]} alt="Garabato 4" className='h-52 mx-auto rounded-xl' />
                </div>
                {/* Cuadrante 3 (Gira 180° sobre sí misma) */}
                <div className='w-full h-full flex items-center justify-center rotate-180'>
                  <img src={mafufosGrid[2]} alt="Garabato 3" className='h-52 mx-auto my-2 rounded-xl' />
                </div>
              </div>
            </div>
          </div>

          {/* Monos */}
          <div className='border-2 border-black/50 rounded-xl px-2 font-semibold overflow-hidden flex flex-col'>
            <h3 className='mb-2 text-sm'>MONOS</h3>
            
            <div className='relative h-52 w-full overflow-hidden my-auto'>
              <div 
                onTransitionEnd={handleMonoTransitionEnd}
                className={`flex h-full w-full ${
                  isMonoTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''
                }`}
                style={{ transform: `translateX(-${currentMonoIndex * 100}%)` }}
              >
                {extendedMonosImages.map((src, index) => (
                  <div key={index} className='w-full h-full shrink-0 flex items-center justify-center'>
                    <img
                      src={src}
                      alt={`Mono ${(index % monosImages.length) + 1}`}
                      className='h-52 mx-auto object-contain'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className='grid grid-cols-1 mt-2'>
          <div className='border-2 border-black/50 rounded-xl p-2 font-semibold flex'>
            <img src="/images/dibujos/nepo1.png" alt="" className='h-52 w-6/12 mx-auto' />
            <img src="/images/dibujos/mosca.png" alt="" className='w-40'/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App