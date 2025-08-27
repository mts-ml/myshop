import { useState } from "react"


export function Counter() {
   const [counter, setCounter] = useState(0)


   return (
      <main>
         <h1>Contador</h1>

         <div>
            <button
               type="button"
               aria-label={`Clique para aumentar contagem para ${counter + 1}`}
               onClick={() => setCounter(prev => prev + 1)}
            >
               +
            </button>

            <button
               type="button"
               aria-label={`Clique para diminuir contagem para ${counter - 1}`}
               onClick={() => setCounter(prev => prev - 1)}
            >
               -
            </button>
         </div>

         <h2>{counter}</h2>
      </main>
   )
}
