import Head from 'next/head'

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <meta chartset='utf-8' />
        <title>Workout | Home</title>
      </Head>
      <Component />
    </>
  )
}

export default MyApp