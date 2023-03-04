import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectValue } from '../slices/counterSlices'

const Home: NextPage = () => {
  const count = useSelector(selectValue)
  const dispatch = useDispatch()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
             The current value is  {count}
             <div className='flex flex-col gap-2'>
            <button className='bg-green-500 p-2 text-white rounded-md'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button className='bg-red-500 p-2 text-white rounded-md'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      </main>
  
 
    </div>
  )
}

export default Home
