import React from 'react'
import { View } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'

const Convert = () => {
    return (
        <View>
            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="18" height="18" rx="4" fill="#CA8069"/>
            <Path d="M4 14V9.625H8.37496L6.36435 11.6375C7.05807 12.3469 8.00775 12.7477 8.99995 12.75C10.5871 12.7476 12.0009 11.7464 12.5299 10.25H12.5412C12.6128 10.0466 12.6669 9.83754 12.703 9.625H13.9605C13.6456 12.1249 11.5196 13.9999 8.99995 14H8.9937C7.66794 14.0039 6.3957 13.4773 5.46061 12.5375L4 14ZM5.29624 8.37501H4.03875C4.35359 5.87604 6.4781 4.00139 8.99683 4.00003H8.99995C10.326 3.99578 11.5985 4.52245 12.5337 5.46254L13.9999 4.00003V8.37501H9.62495L11.6387 6.36253C10.9442 5.65231 9.99325 5.25138 8.99995 5.25004C7.41281 5.25238 5.99903 6.25364 5.46999 7.75002H5.45874C5.38658 7.95321 5.33179 8.16234 5.29624 8.37501Z" fill="white"/>
            </Svg>

        </View>
    )
}

export default Convert
