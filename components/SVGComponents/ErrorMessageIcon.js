import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ErrorMessageIcon = () => {
  return (
    <Svg 
        width="42" 
        height="42" 
        viewBox="0 0 42 42" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
    <Path 
        d="M20.979 42C9.38376 41.9884 -0.0077187 32.5812 4.76036e-06 20.986C0.00773776 9.39076 9.41175 -0.00385884 21.007 1.18907e-06C32.6022 0.0038636 42 9.40474 42 21C41.993 32.6033 32.5823 42.0046 20.979 42ZM4.2 21.3612C4.29937 30.6038 11.8463 38.03 21.0893 37.9806C30.3323 37.9307 37.799 30.4237 37.799 21.1806C37.799 11.9375 30.3323 4.43052 21.0893 4.38059C11.8463 4.33115 4.29937 11.7574 4.2 21V21.3612ZM23.1 31.5H18.9V27.3H23.1V31.5ZM23.1 23.1H18.9V10.5H23.1V23.1Z" 
        fill="white"
    />
    </Svg>

  )
}

export default ErrorMessageIcon