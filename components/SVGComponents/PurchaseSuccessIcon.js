import React from 'react'
import Svg, { Path } from 'react-native-svg'

const PurchaseSuccessIcon = ({size}) => {
  return (
    <Svg 
        width={size || "51" }
        height="51" 
        viewBox="0 0 51 51" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
    <Path 
        d="M23.167 32.5L17.5 26.8124L19.1188 25.1876L23.1688 29.2477L23.167 29.2494L32.8812 19.5L34.5 21.1247L24.7859 30.8753L23.1682 32.4989L23.167 32.5Z" 
        fill="white"
    />
    <Path 
        d="M50 25.5C50 11.969 39.031 1 25.5 1C11.969 1 1 11.969 1 25.5C1 39.031 11.969 50 25.5 50C39.031 50 50 39.031 50 25.5Z" 
        stroke="white"
    />
    </Svg>

  )
}

export default PurchaseSuccessIcon