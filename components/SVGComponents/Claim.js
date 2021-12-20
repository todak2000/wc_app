import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path, G, Rect, Defs, ClipPath} from 'react-native-svg';

 function Claim(){
    return (

        <View style={styles.container}>
            <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="32" height="32" rx="10" fill="#4F9A51"/>
            <G clip-path="url(#clip0_400_796)">
            <Path d="M15.8651 16.4225C15.7431 16.3428 15.5796 16.3769 15.4999 16.4989C15.4201 16.6208 15.4543 16.7843 15.5762 16.8641C15.9071 17.0805 16.1335 17.1457 16.4246 17.1626V17.4388C16.4246 17.5845 16.5428 17.7026 16.6885 17.7026C16.8342 17.7026 16.9523 17.5845 16.9523 17.4388V17.1415C17.5341 17.0257 17.8738 16.5452 17.9493 16.0963C18.0465 15.5179 17.744 15.0149 17.1785 14.815C17.1042 14.7887 17.0282 14.7612 16.9523 14.7326V13.515C17.1409 13.5615 17.2532 13.6567 17.2631 13.6654C17.3703 13.7625 17.5359 13.7552 17.6341 13.6487C17.7329 13.5416 17.7262 13.3747 17.6191 13.2759C17.6043 13.2623 17.3571 13.0395 16.9523 12.9776V12.731C16.9523 12.5853 16.8342 12.4672 16.6885 12.4672C16.5428 12.4672 16.4246 12.5853 16.4246 12.731V12.9978C16.3872 13.0061 16.3492 13.0156 16.3104 13.0273C15.9378 13.1395 15.6594 13.4583 15.5838 13.8593C15.5149 14.225 15.6321 14.5778 15.8899 14.78C16.0255 14.8864 16.1941 14.9838 16.4246 15.0866V16.6341C16.2276 16.619 16.0898 16.5695 15.8651 16.4225ZM16.2155 14.3648C16.1134 14.2847 16.07 14.1284 16.1024 13.957C16.1311 13.8047 16.2307 13.6219 16.4247 13.5457V14.4991C16.3461 14.4561 16.2749 14.4114 16.2155 14.3648ZM17.0026 15.3125C17.4785 15.4807 17.4492 15.888 17.4289 16.0088C17.3895 16.2432 17.2272 16.4914 16.9523 16.5926V15.2945C16.9691 15.3005 16.9854 15.3064 17.0026 15.3125Z" fill="white"/>
            <Path d="M24.7884 19.6104C24.438 19.0679 23.7558 18.8583 23.162 19.109L22.453 19.3431V18.9867C22.453 18.4862 22.0459 18.0791 21.5455 18.0791C21.4266 18.0791 21.3299 17.9824 21.3299 17.8636V13.033C21.3299 12.0583 20.8261 11.164 19.9822 10.641L18.4104 9.66662V8.80772C18.6784 8.6214 19.2439 8.12167 19.5672 7.06156C19.6389 6.82654 19.5963 6.57865 19.4502 6.38143C19.3047 6.18502 19.0811 6.07233 18.8367 6.07233H14.5866C14.3422 6.07233 14.1186 6.18502 13.9731 6.38143C13.8271 6.57865 13.7844 6.82654 13.8561 7.06156C14.1794 8.12167 14.7449 8.6214 15.0129 8.80772V9.66662L13.4411 10.641C12.5972 11.164 12.0934 12.0583 12.0934 13.033V14.2311C12.0934 14.3768 12.2115 14.4949 12.3572 14.4949C12.503 14.4949 12.6211 14.3768 12.6211 14.2311V13.033C12.6211 12.2422 13.0316 11.5157 13.7191 11.0895L15.3489 10.0792H18.0745L19.7042 11.0895C20.3918 11.5156 20.8023 12.2422 20.8023 13.033V17.8636C20.8023 18.2735 21.1357 18.6068 21.5455 18.6068C21.755 18.6068 21.9254 18.7772 21.9254 18.9867V19.5174L19.1895 20.4209C19.1981 20.3848 19.205 20.3478 19.21 20.3102C19.249 20.0176 19.1717 19.7273 18.9924 19.4928C18.8148 19.2605 18.5582 19.1105 18.2691 19.0698C18.2691 19.0698 13.9139 18.209 13.7161 18.2223C13.2003 18.2554 12.7688 18.5679 12.3881 18.8437C12.3427 18.8766 12.2982 18.9088 12.2543 18.9399C12.0062 19.116 11.7569 19.2194 11.498 19.2662V18.9867C11.498 18.7772 11.6684 18.6068 11.8778 18.6068C12.2877 18.6068 12.6211 18.2735 12.6211 17.8636V15.4486C12.6211 15.3029 12.503 15.1848 12.3572 15.1848C12.2115 15.1848 12.0934 15.3029 12.0934 15.4486V17.8636C12.0934 17.9825 11.9967 18.0792 11.8778 18.0792C11.3774 18.0792 10.9703 18.4863 10.9703 18.9867V19.2893C10.6861 19.2675 10.3857 19.1967 10.0597 19.094V18.8893C10.0597 18.4451 9.69828 18.0837 9.25404 18.0837H7.80566C7.36143 18.0837 7 18.4451 7 18.8893V23.122C7 23.5663 7.36143 23.9277 7.80566 23.9277H9.25404C9.69828 23.9277 10.0597 23.5663 10.0597 23.122V22.787L11.9388 22.6773C11.9411 22.6771 11.9435 22.677 11.9458 22.6768C12.355 22.6419 12.7749 22.6983 13.1603 22.8403C15.1708 23.5809 15.1958 23.5901 15.1958 23.5901C15.6085 23.7421 16.0069 23.8033 16.3948 23.8033C17.2194 23.8033 17.9956 23.5262 18.754 23.2555C18.9266 23.1939 19.105 23.1302 19.281 23.0709C19.9783 22.836 20.6855 22.6233 21.3502 22.4256C21.4898 22.384 21.5694 22.2371 21.5278 22.0974C21.4863 21.9578 21.3395 21.8784 21.1997 21.9198C20.5305 22.1189 19.8181 22.3331 19.1125 22.5708C18.932 22.6316 18.7514 22.6962 18.5766 22.7585C17.5027 23.1418 16.4885 23.5038 15.378 23.0948C15.3664 23.0905 13.3426 22.3451 13.3426 22.3451C12.8862 22.177 12.3889 22.1097 11.9044 22.1506L10.0596 22.2584V19.6463C10.833 19.8749 11.6976 19.9819 12.5596 19.3702C12.6048 19.3382 12.6507 19.3048 12.6975 19.2709C13.0203 19.0371 13.3862 18.7721 13.7497 18.7488C13.9165 18.7377 14.8842 18.9368 15.2486 19.0115C15.3547 19.0333 18.1745 19.5889 18.1745 19.5889C18.1799 19.59 18.1853 19.5908 18.1906 19.5916C18.3436 19.6119 18.4794 19.6907 18.5731 19.8132C18.6668 19.9358 18.7072 20.0875 18.6868 20.2404C18.6447 20.5561 18.3539 20.7788 18.038 20.7366C18.0356 20.7363 18.0333 20.736 18.0309 20.7358L15.7008 20.4887C15.5562 20.4733 15.4259 20.5783 15.4106 20.7232C15.3952 20.8681 15.5002 20.998 15.6451 21.0134L17.972 21.2602C18.1313 21.2809 18.2871 21.2662 18.4318 21.2225C18.4465 21.2203 23.338 19.6065 23.338 19.6065C23.3455 19.6041 23.3529 19.6012 23.3601 19.5981C23.7188 19.4428 24.133 19.5683 24.345 19.8967C24.468 20.0871 24.5039 20.3217 24.4436 20.5403C24.3846 20.7538 24.2389 20.9334 24.0426 21.0351C23.5583 21.2022 23.0351 21.3695 22.3494 21.5768C22.21 21.619 22.1311 21.7662 22.1733 21.9057C22.2077 22.0198 22.3124 22.0933 22.4257 22.0933C22.451 22.0933 22.4767 22.0896 22.5022 22.0819C23.2025 21.8701 23.736 21.6993 24.2317 21.5281C24.2422 21.5245 24.2524 21.5202 24.2623 21.5152C24.6004 21.3484 24.8519 21.0442 24.9522 20.6807C25.0527 20.3172 24.9929 19.9271 24.7884 19.6104ZM17.8827 9.55156H15.5406V8.92517H17.8827V9.55156ZM18.0754 8.3975H15.348C15.2833 8.35594 15.1577 8.26512 15.0128 8.10752C14.8176 7.89533 14.546 7.51489 14.3608 6.90762C14.3384 6.8342 14.3517 6.75686 14.3971 6.69544C14.4421 6.63479 14.5111 6.59996 14.5866 6.59996H18.8367C18.9122 6.59996 18.9812 6.63475 19.0262 6.69544C19.0716 6.75686 19.0849 6.83424 19.0625 6.90762C18.8773 7.51489 18.6057 7.8953 18.4105 8.10752C18.2651 8.26555 18.1393 8.35647 18.0754 8.3975ZM9.53199 23.122C9.53199 23.2753 9.40731 23.4 9.25404 23.4H7.80566C7.65236 23.4 7.52767 23.2753 7.52767 23.122V18.8893C7.52767 18.736 7.65236 18.6113 7.80566 18.6113H9.25404C9.40731 18.6113 9.53199 18.736 9.53199 18.8893V23.122Z" fill="white"/>
            </G>
            <Defs>
            <ClipPath id="clip0_400_796">
            <Rect width="18" height="18" fill="white" transform="translate(7 6)"/>
            </ClipPath>
            </Defs>
            </Svg>



        </View>
        
    )
}
export default Claim
const styles = StyleSheet.create({
    container: {
      // paddingTop:50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });