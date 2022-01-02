import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path, Rect, G, FeBlend,FeFlood,FeGaussianBlur,Filter, Defs, FeComposite} from 'react-native-svg';

 function AddSVG(){
    return (

        <View style={styles.container}>
             <Svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect width="45" height="45" rx="12" fill="#F0FFED"/>
<Path d="M28.2765 16.3058L24.383 16.3263L13.099 16.3867C12.7738 14.797 12.6982 12.2687 13.1963 10.7248C13.8027 8.75602 15.8588 7.82438 17.6605 7.38493C20.4689 6.69762 24.6642 6.73102 25.8068 9.16911C25.8801 9.3484 26.0453 9.47321 26.2375 9.4943C28.5929 9.72276 28.7512 13.8273 28.2765 16.3058Z" fill="#56788B"/>
<Path d="M28.2766 16.3058L24.383 16.3264V13.123C23.2275 9.6578 26.2375 9.49432 26.2375 9.49432C28.593 9.72278 28.7512 13.8273 28.2766 16.3058Z" fill="#415E6F"/>
<Path d="M24.8347 26.9424C24.6179 26.9183 24.3946 26.8978 24.165 26.8802H17.3821C8.555 27.5465 9.13859 33.3332 9.18429 36.6806C9.18664 36.8576 9.33136 37 9.5089 37H32.0382C32.2157 37 32.3605 36.8576 32.3628 36.6806C32.4073 33.4205 32.9622 27.8459 24.8347 26.9424V26.9424Z" fill="#FF6B81"/>
<Path d="M24.1651 26.8802C24.0731 28.6732 22.5901 30.0982 20.7737 30.0982C18.9573 30.0982 17.4737 28.6726 17.3823 26.8802C17.9313 26.8386 18.5167 26.817 19.1413 26.817H22.4062C23.0308 26.817 23.6161 26.8386 24.1651 26.8802Z" fill="#D9F0F4"/>
<Path d="M32.3627 36.6807C32.3604 36.8576 32.2157 37 32.0381 37H30.8662C31.0438 37 31.1885 36.8576 31.1908 36.6807C31.233 33.5857 31.7352 28.2555 24.8346 26.9424C32.9621 27.8459 32.4073 33.4205 32.3627 36.6807V36.6807Z" fill="#ED2061"/>
<Path d="M25.5463 18.1723H27.148C27.8873 18.1723 28.4866 17.573 28.4866 16.8337C28.4866 16.0944 27.8873 15.4951 27.148 15.4951H26.0085L25.5463 18.1723Z" fill="#FAB684"/>
<Path d="M15.9303 18.1723H14.3285C13.5893 18.1723 12.99 17.573 12.99 16.8337C12.99 16.0944 13.5893 15.4951 14.3285 15.4951H15.468L15.9303 18.1723Z" fill="#FAB684"/>
<Path d="M22.406 24.9589C22.2694 25.3291 22.1989 26.2789 22.406 26.8168C22.406 27.7185 21.6751 28.4495 20.7736 28.4495C19.8721 28.4495 19.1412 27.7185 19.1412 26.8168C19.3483 26.2788 19.2778 25.3291 19.1412 24.9589H22.406Z" fill="#FAB684"/>
<Path d="M26.2204 20.0178C26.2204 21.3139 25.1183 22.862 22.9433 24.6204C22.8214 24.7194 22.6919 24.8096 22.5572 24.8905C22.0193 25.2127 21.3906 25.385 20.7618 25.3838C19.9755 25.3856 19.2132 25.1155 18.6038 24.6204C16.4294 22.862 15.3273 21.3139 15.3273 20.0178C15.3273 19.8801 15.3325 19.7424 15.3437 19.6071C15.3999 19.0417 15.3835 16.46 15.3823 14.793V14.7913C15.3677 14.2264 15.6841 13.7043 16.1921 13.4553C17.3019 12.962 19.0368 12.7159 20.7736 12.717C22.0199 12.7165 23.265 12.8424 24.2792 13.0967C24.6782 13.1963 25.0421 13.3159 25.3556 13.4553C25.863 13.7043 26.1794 14.2264 26.1648 14.7913V14.793C26.1636 16.46 26.1478 19.0417 26.2034 19.6071C26.2146 19.7424 26.2204 19.8801 26.2204 20.0178V20.0178Z" fill="#FDD9B4"/>
<Path d="M26.2203 20.0177C26.2203 21.3137 25.1181 22.8618 22.9431 24.6202C22.8213 24.7192 22.6918 24.8095 22.557 24.8903C24.2117 23.405 25.0484 22.0843 25.0484 20.9552C25.0484 20.8175 25.0426 20.6798 25.0314 20.5444C24.9758 19.979 24.9916 16.4598 24.9927 14.7928V14.3809C25.0062 13.8524 24.7302 13.3614 24.2791 13.0966C24.6781 13.1962 25.042 13.3157 25.3554 13.4552C25.8629 13.7042 26.1793 14.2262 26.1646 14.7911V14.7928C26.1634 16.4598 26.1476 19.0415 26.2033 19.6069C26.2144 19.7423 26.2203 19.88 26.2203 20.0177Z" fill="#F9C19B"/>
<Path d="M22.2135 20.8392C22.0095 20.7075 21.7376 20.7661 21.606 20.97C21.4198 21.2584 21.1042 21.4307 20.7619 21.4307C20.4195 21.4307 20.1039 21.2584 19.9177 20.97C19.786 20.7661 19.514 20.7076 19.3101 20.8392C19.1062 20.9709 19.0477 21.2429 19.1793 21.4468C19.5281 21.9871 20.1197 22.3096 20.7618 22.3096C21.4039 22.3096 21.9956 21.9871 22.3444 21.4468C22.476 21.2429 22.4174 20.9709 22.2135 20.8392V20.8392Z" fill="#FAB684"/>
<Path d="M19.972 19.4126C20.1759 19.5441 20.4479 19.4856 20.5796 19.2817C20.6224 19.2153 20.695 19.1756 20.7737 19.1756C20.8523 19.1756 20.9249 19.2153 20.9677 19.2817C21.0518 19.4119 21.1931 19.4829 21.3373 19.4829C21.419 19.4829 21.5016 19.4601 21.5753 19.4126C21.7792 19.2809 21.8378 19.0089 21.7061 18.805C21.5006 18.4867 21.1521 18.2967 20.7736 18.2967C20.3952 18.2967 20.0466 18.4867 19.8412 18.805C19.7095 19.0089 19.7681 19.2809 19.972 19.4126V19.4126Z" fill="#FAB684"/>
<Path d="M36.8394 28.1447C36.8394 31.2233 34.3334 33.7281 31.2531 33.7281C31.055 33.7281 30.8593 33.7176 30.6671 33.6977C27.8611 33.4035 25.6667 31.0252 25.6667 28.1447C25.6667 25.2643 27.8611 22.886 30.6671 22.5918C30.8593 22.5719 31.055 22.5613 31.2531 22.5613C34.3334 22.5613 36.8394 25.0662 36.8394 28.1447V28.1447Z" fill="#09EAA3"/>
<Path d="M36.8394 28.1447C36.8394 31.2233 34.3333 33.7281 31.2531 33.7281C31.055 33.7281 30.8593 33.7176 30.6671 33.6977C33.4732 33.4035 35.6675 31.0252 35.6675 28.1447C35.6675 25.2643 33.4732 22.886 30.6671 22.5918C30.8593 22.5719 31.055 22.5613 31.2531 22.5613C34.3333 22.5613 36.8394 25.0662 36.8394 28.1447V28.1447Z" fill="#14BB87"/>
<Path d="M29.3167 28.5841H30.8135V30.081C30.8135 30.3237 31.0102 30.5205 31.2529 30.5205C31.4956 30.5205 31.6924 30.3237 31.6924 30.081V28.5841H33.1892C33.4319 28.5841 33.6287 28.3874 33.6287 28.1447C33.6287 27.902 33.4319 27.7052 33.1892 27.7052H31.6924V26.2084C31.6924 25.9657 31.4956 25.7689 31.2529 25.7689C31.0102 25.7689 30.8135 25.9657 30.8135 26.2084V27.7052H29.3167C29.074 27.7052 28.8772 27.902 28.8772 28.1447C28.8772 28.3874 29.074 28.5841 29.3167 28.5841Z" fill="white"/>
<Path d="M14.225 34.5958C14.1428 34.5933 13.982 34.6147 13.8255 34.7684C13.653 34.9377 13.4238 35.3077 13.4238 36.5605C13.4238 36.8033 13.6206 37 13.8633 37C14.106 37 14.3027 36.8033 14.3027 36.5605C14.3027 35.7955 14.3947 35.5064 14.4345 35.4171C14.5646 35.3428 14.6535 35.2038 14.6564 35.0431C14.6608 34.8004 14.4676 34.6001 14.225 34.5958Z" fill="#ED2061"/>
<Path d="M27.7223 34.7684C27.5658 34.6147 27.4048 34.594 27.3229 34.5958C27.0802 34.6002 26.887 34.8005 26.8914 35.0431C26.8943 35.2039 26.9832 35.3429 27.1134 35.4171C27.1532 35.5064 27.2451 35.7955 27.2451 36.5606C27.2451 36.8033 27.4419 37 27.6846 37C27.9273 37 28.124 36.8033 28.124 36.5606C28.124 35.3078 27.8948 34.9378 27.7223 34.7684V34.7684Z" fill="#ED2061"/>
</Svg>



        </View>
        
    )
}
export default AddSVG
const styles = StyleSheet.create({
    container: {    
      alignItems: 'center',
      justifyContent: 'center',
      margin:30,
    },
  });