/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import GlobalStyle from '../styles/global'

const MyApp = ({ Component, pageProps }) => 
{
  return( 
     <>
      <Component {...pageProps} />
      <GlobalStyle/>
     </>
     
     )
}

export default MyApp
