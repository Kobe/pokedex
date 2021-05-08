import Head from 'next/head'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pokedex</h1>

        <dl>
          <dt>tbd</dt>
          <dd>tbd</dd>
        </dl>
      </main>
    </Fragment>
  )
}
