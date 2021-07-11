import Head from 'next/head'
import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Plot from '../components/Plot'

const DynamicValueCounts = dynamic(
  () => import('../components/ValueCounts'),
  { ssr: false }
)

const Table = dynamic(
  () => import('../components/Table'),
  { ssr: false }
)
export default function Home() {
  let [data, setData] = useState()
  let [user, setUser] = useState()
  let [dataNlp, setDataNlp] = useState()

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

    const resSentiment = await fetch(
      '/api/nlp',
      {
        body: JSON.stringify({
          username: inputRef.current.value,
          dfData: result
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      },

    )
    const sentData = await resSentiment.json()
    setDataNlp(sentData)
    setUser(inputRef.current.value)
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
            className="p-6 mt-6 text-left border w-96 rounded-xl"
          >
            <h3 className="text-2xl font-bold">Tweet source</h3>
            <p className="mt-4 text-xl">
              Display the device for all the tweet user is mentioned in.
            </p>
            {typeof data != "undefined" && <DynamicValueCounts data={data} column={"source"} type={"PieChart"} />}
          </div>

          <div
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">User Interactions</h3>
            <p className="mt-4 text-xl">
              A chart of users that interact with the given twitter username.
            </p>
            {typeof data != "undefined" && <DynamicValueCounts data={data} column={"users"} username={user} type={"BarChart"} />}
          </div>

          <div
            className="p-6 mt-6 text-left border w-96 rounded-xl"
          >
            <h3 className="text-2xl font-bold">Sentiment Analysis</h3>
            <p className="mt-4 text-xl">
              A chart showing the overall sentiment percentage for all the tweet.
            </p>
            {typeof data != "undefined" && <Plot data={dataNlp} />}
          </div>

          <div
            className="p-6 mt-6 text-left border w-96 rounded-xl"
          >
            <h3 className="text-2xl font-bold">User Data</h3>
            <p className="mt-4 text-xl">
              A table showing the extracted data for the given twitter username.
            </p>
            {typeof data != "undefined" && <Table dfData={data} username={user} />}
          </div>
        </div>
      </main>
    </div>
  )
}
