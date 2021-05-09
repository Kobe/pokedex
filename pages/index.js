import { getDisplayName } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import { Fragment } from 'react'

export async function getStaticProps() {
  console.log(new Date())
  const dittoResponse = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

  if (dittoResponse.status !== 200) {
    console.error(json)
    throw new Error('Failed to fetch API')
  }

  const randomNumber = Math.floor(Math.random() * 100)
  const dittoData = await dittoResponse.json()

  return {
    props: {
      randomNumber,
      dittoData
    },
    revalidate: 60
  }
}

export default function Home({randomNumber, dittoData}) {
  return (
    <Fragment>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pokedex</h1>

        <dl>
          <dt>randomNumber</dt>
          <dd>{randomNumber}</dd>
        </dl>

        <dl>
          <dt>{dittoData.order}</dt>
          <dd>{dittoData.name}</dd>
        </dl>
      </main>

      <style jsx>{`
        dl {
          display: flex;
        }
      `}
      </style>
    </Fragment>
  )
}
