import { useState, useEffect } from 'react'
import './App.css'
import Stack from './components/Stack'

function App() {
  const [count, setCount] = useState(0)

  // --- Carrusel Monos  ---
  const monosImages = [
    '/images/dibujos/taika.png',
    '/images/dibujos/zorro.png',
    '/images/dibujos/pajarito.png',
    '/images/dibujos/nepo3.png',
    '/images/dibujos/pomodoro.png',
    '/images/dibujos/gancho.png',
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

  // --- Lógica Garabatos Mafufos ---
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




  // --- Imágenes para seccion fanzine NEPO ---
  const stackImages = [
    '/images/dibujos/fannepo1.jpg',
    '/images/dibujos/fannepo2.jpg',
    '/images/dibujos/fannepo3.jpg',
  ]

  return (
    <div className="min-h-screen  text-black  ">
      <div className='bg-stone-300 flex flex-col items-center p-3'>
        <section className='w-full flex mt-4'>
          <div className='w-8/12 my-auto'>
            <h1 className="text-6xl font-bold text-center">
              <span className="inline-block scale-y-150 origin-bottom">_oblea_</span>
            </h1>
            <p className='text-xl mt-6 font-bold text-center w-full inline-block uppercase scale-y-200 origin-bottom'>Monero tapatío</p>
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
      </div>

      {/* Seccion   Comic*/}
      <section className='w-full px-3 bg-stone-300 pb-14'>
        <div className="grid grid-cols-3 gap-2 ">

          {/* Garabatos Mafufos  */}
          <div className='col-span-2 border-2 border-black/50 rounded-xl px-1 font-semibold overflow-hidden flex flex-col '>
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
                  <img src={mafufosGrid[0]} alt="Garabato 1" className='h-52 w-52 mx-auto rounded-xl' />
                </div>
                {/* Cuadrante 2 */}
                <div className='w-full h-full flex items-center justify-center rotate-90'>
                  <img src={mafufosGrid[1]} alt="Garabato 2" className='h-52 w-52 mx-auto rounded-xl' />
                </div>
                {/* Cuadrante 4 */}
                <div className='w-full h-full flex items-center justify-center -rotate-90'>
                  <img src={mafufosGrid[3]} alt="Garabato 4" className='h-52 w-52 mx-auto rounded-xl' />
                </div>
                {/* Cuadrante 3 */}
                <div className='w-full h-full flex items-center justify-center rotate-180'>
                  <img src={mafufosGrid[2]} alt="Garabato 3" className='h-52 w-52 mx-auto my-2 rounded-xl' />
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
                className={`flex h-full w-full ${isMonoTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''
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

        {/* INTER NEPO Y MOSCA */}
        <div className='grid grid-cols-1 mt-2 border-2 border-black/50 rounded-xl p-2'>
          <div className=' font-semibold flex items-center justify-around mt-2'>
            <img src="/images/dibujos/nepo1.png" alt="" className='h-52 object-contain' />
            <img src="/images/dibujos/mosca.png" alt="" className='w-40 object-contain' />
          </div>

          <div className=' '>
            <div className='mt-4 flex'>
              <img src="/images/dibujos/michoacanabn.png" alt="" className='h-24 ml-auto bg-amber-50/30 skew-x-16 -rotate-y-180 object-contain rounded' />
              <img src="/images/dibujos/cactus.png" alt="" className='h-14 ml-auto object-contain' />

            </div>

          </div>
        </div>
      </section>



      <section className='bg-black/90 w-full h-200'>
        <h3 className='text-stone-300 font-bold text-xl pt-16 text-center'>Adquiere la colección de</h3>
        <h2 className='text-stone-300 font-bold text-5xl  text-center'>FANZINES NEPO</h2>

        {/* FANZINES NEPO */}
        <div className='w-85 h-126 relative mx-auto flex items-center justify-center '>
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={stackImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`card-${i + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>

        <div className='w-4/12 mx-auto mt-8'>
          <button className='border-2 border-stone-300 py-2 px-4 mx-auto rounded text-stone-300 font-semibold hover:bg-stone-300 hover:text-gray-900 '>Ordena aquí</button>
        </div>

      </section>








    </div>
  )
}

export default App