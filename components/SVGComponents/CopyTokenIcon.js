import React from 'react'
import Svg, { Path } from 'react-native-svg'

const CopyTokenIcon = () => {
  return (
    <Svg
        width="11" 
        height="11" 
        viewBox="0 0 11 11" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
    <Path 
        d="M7.7 11H1.1C0.492487 11 0 10.5075 0 9.9V3.3H1.1V9.9H7.7V11ZM9.9 8.8H3.3C2.69249 8.8 2.2 8.30751 2.2 7.7V1.1C2.2 0.492487 2.69249 0 3.3 0H9.9C10.5075 0 11 0.492487 11 1.1V7.7C11 8.30751 10.5075 8.8 9.9 8.8ZM3.3 1.1V7.7H9.9V1.1H3.3ZM6.05 6.35855L4.01115 4.31915L4.78885 3.54145L6.05 4.80315L8.41115 2.442L9.18885 3.2197L6.05 6.358V6.35855Z" 
        fill="white"
    />
    </Svg>

  )
}

export default CopyTokenIcon