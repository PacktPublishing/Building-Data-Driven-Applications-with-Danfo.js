import Head from 'next/head'
import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
// import ValueCounts from '../components/ValueCounts'

const DynamicValueCounts = dynamic(
  () => import('../components/ValueCounts'),
  { ssr: false }
)
export default function Home() {
  let [data, setData] = useState()
  let inputRef = useRef()
  const handleSubmit = async () => {
    const res = await fetch(
      '/api/tweet',
      {
        body: JSON.stringify({
          username: inputRef.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    const result = await res.json()
    console.log(result)
    setData(result)
  }
  const handleKeyEvent = async (event) => {
    if (event.key === 'Enter') {
      await handleSubmit()
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Twitter Platform</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.plot.ly/plotly-2.2.0.min.js"></script>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-blue-600">
            Twitter Dashboard!
          </span>
        </h1>

        <div className='border-2 flex justify-between p-2 rounded-md  md:p-4'>
          <input id='searchInput' type='text' placeholder='Search twitter user' className='focus:outline-none' ref={inputRef} onKeyPress={handleKeyEvent} />
          <button className='focus:outline-none' onClick={() => { handleSubmit() }}><img src="/search.svg" /></button>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Tweet source &rarr;</h3>
            <p className="mt-4 text-xl">
              Display the device for all the tweet data.
            </p>
            {typeof data != "undefined" && <DynamicValueCounts data={data} column={"source"} type={"PieChart"} />}
          </div>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
