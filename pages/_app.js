import { ThemeProvider} from 'styled-components'
import Meta from '../components/Meta'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={{}}>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}