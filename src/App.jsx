import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-stone-300  text-black flex flex-col items-center justify-center p-3">
      <section className=' w-full flex'>
        <div className='grow my-auto'>
          <h1 className="text-6xl font-bold">
            <span className="inline-block scale-y-150 origin-bottom">_oblea_</span>
          </h1>
          <p className='text-sm mt-4 font-semibold text-justify w-8/12'>Dibujo Monos, Historietas y Fanzines</p>
        </div>
        <div className='w-4/12'>
          <img src="/images/obleahead2.png" alt="" className='w-16 mx-auto' />
          <div className='border-2 border-black/50 rounded-xl p-2'>
            <ul className="space-y-1 text-slate-700 text-xs font-semibold">
              <li className="flex items-center gap-1.5">
                <span>🎨</span>
                <span>Dibujo</span>
                <span className="flex-1 border-b border-dotted border-black/40 mb-1"></span>
                <span>90%</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>📖</span>
                <span>Historietas</span>
                <span className="flex-1 border-b border-dotted border-black/40 mb-1"></span>
                <span>85%</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>✂️</span>
                <span>Fanzines</span>
                <span className="flex-1 border-b border-dotted border-black/40 mb-1"></span>
                <span>70%</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>🖋️</span>
                <span>Entintado</span>
                <span className="flex-1 border-b border-dotted border-black/40 mb-1"></span>
                <span>95%</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>💡</span>
                <span>Ideas</span>
                <span className="flex-1 border-b border-dotted border-black/40 mb-1"></span>
                <span>100%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>




      <section className=' w-full mt-4'>
        <div class="grid grid-cols-3 gap-2 ">
          <div className='border-2 border-black/50 rounded-xl p-2 font-semibold'>01

            <h3 className='mb-2'>Ask Questions</h3>
            <img src="/images/hi2.png" alt="" className='h-52 mx-auto' />
            <hr className="my-2 border-t border-black/50" />
            <p className='text-xs font-normal'>Lorem ipsum dolor sit amet consecelit.</p>
          </div>

          <div className='border-2 border-black/50 rounded-xl p-2 font-semibold'>02

            <h3 className='mb-2'>Make Mistakes</h3>
            <img src="/images/smoking2.png" alt="" className='h-52 mx-auto' />
            <hr className="my-2 border-t border-black/50" />
            <p className='text-xs font-normal'>Lorem ipsum dolor sit amet consecelit.</p>
          </div>
          <div className='border-2 border-black/50 rounded-xl p-2 font-semibold'>03

            <h3 className='mb-2'>Think Again</h3>
            <img src="/images/back2.png" alt="" className='h-52 w-full mx-auto' />
            <hr className="my-2 border-t border-black/50" />
            <p className='text-xs font-normal'>Lorem ipsum dolor sit amet consecelit.</p>
          </div>




        </div>

      </section>


    </div>
  );

}

export default App
