import Head from 'next/head'
import wrapper from '../store/configureStore'

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

export default wrapper.withRedux(MyApp)