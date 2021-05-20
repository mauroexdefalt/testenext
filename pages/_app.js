import '../styles/globals.css'
import Context from  '../context/Control'

function MyApp({ Component, pageProps }) {
  return(
  <Context>
  <Component {...pageProps} />
  </Context>
  )
}

export default MyApp
