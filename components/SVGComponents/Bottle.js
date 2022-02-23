import React from 'react'
import { View } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'

const Bottle = () => {
    return (
        <View>
            <Svg width="78" height="66" viewBox="0 0 78 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M16.4191 33C18.5091 33.0227 20.5312 32.2783 22.0822 30.9151C22.2357 30.7799 22.4433 31.0188 22.2899 31.1539C20.6733 32.5695 18.5673 33.3401 16.3924 33.3117C16.1851 33.3089 16.2129 32.9972 16.419 33H16.4191Z" fill="white"/>
            <Path d="M9.22029 63.3746L1.33096 53.2357C0.821556 52.5812 0.446138 51.8327 0.22614 51.0331C0.00614265 50.2335 -0.054123 49.3984 0.0487814 48.5755C0.151686 47.7527 0.415747 46.9581 0.825884 46.2372C1.23602 45.5164 1.7842 44.8833 2.43912 44.3742L34.3937 19.5316C36.2636 18.0753 38.5213 17.2019 40.8849 17.0204L43.58 16.8118L66.7865 3.22521C66.5829 2.78166 66.5496 2.27881 66.6927 1.81228C66.8359 1.34576 67.1457 0.948108 67.563 0.69497C67.9804 0.441833 68.4763 0.350866 68.9564 0.439369C69.4365 0.527873 69.8674 0.789675 70.1669 1.17498L76.7679 9.65807C77.0684 10.0441 77.2162 10.5273 77.1829 11.0153C77.1496 11.5034 76.9376 11.962 76.5874 12.3037C76.2372 12.6454 75.7733 12.8462 75.2844 12.8677C74.7955 12.8891 74.3158 12.7298 73.937 12.4201L54.9538 31.3949C54.5493 34.5537 52.9063 37.4226 50.3861 39.3708L18.0858 64.4823C17.4309 64.9914 16.6821 65.3667 15.8822 65.5866C15.0822 65.8065 14.2467 65.8667 13.4235 65.7639C12.6002 65.661 11.8053 65.3971 11.0841 64.9871C10.363 64.5772 9.72961 64.0292 9.22029 63.3746V63.3746Z" fill="white"/>
            <Path d="M10.7415 60.9056L3.97092 52.2115C3.53952 51.6576 3.22158 51.0243 3.03527 50.3476C2.84895 49.671 2.79791 48.9644 2.88506 48.2681C2.97221 47.5717 3.19585 46.8994 3.54319 46.2894C3.89054 45.6794 4.35479 45.1437 4.90944 44.7129L32.3326 23.4103C33.9264 22.1701 35.8506 21.4263 37.865 21.2717L40.1943 21.0916L61.6653 8.53119L67.4375 15.9433L49.8655 33.4935C49.6974 34.8299 49.2667 36.12 48.5981 37.2897C47.9295 38.4594 47.0362 39.4858 45.9694 40.3098L18.2495 61.8429C17.6949 62.2738 17.0608 62.5913 16.3833 62.7774C15.7058 62.9635 14.9983 63.0145 14.3011 62.9274C13.6039 62.8404 12.9307 62.617 12.3199 62.2701C11.7092 61.9232 11.1728 61.4596 10.7415 60.9056V60.9056Z" fill="#146209"/>
            <Path d="M74.6705 9.9523C75.3362 10.1361 76.1909 9.95167 76.9073 9.40334C77.9576 8.59949 78.3124 7.3195 77.6997 6.54435C77.5882 6.40389 77.4499 6.28616 77.2926 6.19775C77.371 5.96007 77.3913 5.70753 77.3519 5.46067C77.3125 5.2138 77.2145 4.97956 77.0658 4.77698C76.9864 4.67711 76.8932 4.58867 76.7889 4.51424C77.4797 3.57332 77.7388 2.73225 77.3827 2.28186C77.2795 2.17104 77.152 2.08465 77.01 2.02918C76.8679 1.97371 76.715 1.9506 76.5626 1.96158C76.6128 1.57725 76.509 1.18878 76.2734 0.87835C75.756 0.223811 74.7145 0.140857 73.7704 0.614226C73.7591 0.598569 73.7498 0.581775 73.7377 0.56647C73.125 -0.208685 71.7769 -0.185393 70.7265 0.618455C70.2008 1.00435 69.8296 1.55964 69.6775 2.18742C69.0217 2.17791 68.3834 2.39531 67.8739 2.80169C66.8236 3.60554 66.4688 4.88553 67.0815 5.66068C67.1086 5.69495 67.1387 5.72564 67.1686 5.7568L67.1561 5.76951C67.1324 5.73264 67.1091 5.69563 67.0815 5.66068C66.4688 4.88553 65.1207 4.90882 64.0703 5.71267C63.5446 6.09856 63.1734 6.65386 63.0213 7.28164C62.3655 7.27212 61.7272 7.48952 61.2177 7.8959C60.1674 8.69975 59.8126 9.97974 60.4253 10.7549C61.038 11.53 62.3861 11.5068 63.4364 10.7029C63.1926 10.8889 63.0014 11.1334 62.8809 11.4129C62.7605 11.6924 62.7149 11.9976 62.7485 12.2993C62.7821 12.6011 62.8938 12.8894 63.0729 13.1366C63.252 13.3838 63.4925 13.5816 63.7714 13.7113C63.5495 14.2369 63.5276 14.6798 63.7534 14.9654C64.1094 15.4158 65.0016 15.3758 66.0985 14.9485C66.1461 15.0663 66.2103 15.177 66.2891 15.2773C66.9018 16.0524 68.2499 16.0291 69.3002 15.2253C69.8259 14.8394 70.1972 14.2841 70.3493 13.6564C71.0051 13.6658 71.6434 13.4484 72.1529 13.0421C72.3948 12.8576 72.6077 12.639 72.7847 12.3933C73.0702 12.2849 73.338 12.1357 73.5792 11.9504C74.2957 11.4021 74.6877 10.6324 74.6705 9.9523Z" fill="#F0F0F0"/>
            <Path d="M9.22029 63.3746L1.33096 53.2357C0.821556 52.5812 0.446138 51.8327 0.22614 51.0331C0.00614265 50.2335 -0.054123 49.3984 0.0487814 48.5755C0.151686 47.7527 0.415747 46.9581 0.825884 46.2372C1.23602 45.5164 1.7842 44.8833 2.43912 44.3742L34.3937 19.5316C36.2636 18.0753 38.5213 17.2019 40.8849 17.0204L43.58 16.8118L66.7865 3.22521C66.5829 2.78166 66.5496 2.27881 66.6927 1.81228C66.8359 1.34576 67.1457 0.948108 67.563 0.69497C67.9804 0.441833 68.4763 0.350866 68.9564 0.439369C69.4365 0.527873 69.8674 0.789675 70.1669 1.17498L76.7679 9.65807C77.0684 10.0441 77.2162 10.5273 77.1829 11.0153C77.1496 11.5034 76.9376 11.962 76.5874 12.3037C76.2372 12.6454 75.7733 12.8462 75.2844 12.8677C74.7955 12.8891 74.3158 12.7298 73.937 12.4201L54.9538 31.3949C54.5493 34.5537 52.9063 37.4226 50.3861 39.3708L18.0858 64.4823C17.4309 64.9914 16.6821 65.3667 15.8822 65.5866C15.0822 65.8065 14.2467 65.8667 13.4235 65.7639C12.6002 65.661 11.8053 65.3971 11.0841 64.9871C10.363 64.5772 9.72961 64.0292 9.22029 63.3746V63.3746ZM69.8526 1.41935C69.6046 1.10022 69.2444 0.887371 68.8451 0.824005C68.4458 0.760639 68.0373 0.851499 67.7026 1.07815C67.3679 1.3048 67.132 1.65026 67.0427 2.04441C66.9535 2.43856 67.0177 2.85188 67.2222 3.20048L67.3231 3.3723L43.7022 17.2015L40.9157 17.4172C38.63 17.5927 36.4466 18.4374 34.6382 19.8458L2.6836 44.6884C2.06995 45.1654 1.55632 45.7585 1.17203 46.434C0.787742 47.1094 0.540324 47.8539 0.443906 48.6249C0.347488 49.3959 0.403959 50.1784 0.610093 50.9276C0.816228 51.6768 1.16799 52.3781 1.64529 52.9914L9.53462 63.1302C10.0118 63.7436 10.6052 64.257 11.281 64.6411C11.9567 65.0253 12.7015 65.2726 13.4729 65.3689C14.2442 65.4653 15.027 65.4089 15.7766 65.2028C16.5261 64.9968 17.2277 64.6452 17.8413 64.1681L50.1417 39.0566C51.3573 38.1169 52.3744 36.9455 53.1341 35.6102C53.8937 34.2749 54.3809 32.8023 54.5673 31.2776L54.5758 31.2098L73.9302 11.864L74.071 12.005C74.3575 12.2915 74.7424 12.4581 75.1475 12.4707C75.5525 12.4834 75.9472 12.3411 76.251 12.0731C76.5547 11.805 76.7448 11.4312 76.7825 11.0279C76.8201 10.6246 76.7025 10.2221 76.4535 9.90244L69.8526 1.41935Z" fill="white"/>
            <Path d="M27.3067 25.3454L16.0118 34.1304L31.3855 53.8965L42.6804 45.1115L27.3067 25.3454Z" fill="white"/>
            <Path d="M16.25 34.1463L31.3155 53.625L42.25 45.0725L27.1845 25.5938L16.25 34.1463Z" fill="white"/>
            <Path d="M60.3281 16.6562C60.889 16.6562 61.3438 16.2015 61.3438 15.6406C61.3438 15.0797 60.889 14.625 60.3281 14.625C59.7672 14.625 59.3125 15.0797 59.3125 15.6406C59.3125 16.2015 59.7672 16.6562 60.3281 16.6562Z" fill="white"/>
            <Path d="M52.6094 17.8749C53.1703 17.8749 53.625 17.5112 53.625 17.0624C53.625 16.6137 53.1703 16.2499 52.6094 16.2499C52.0485 16.2499 51.5938 16.6137 51.5938 17.0624C51.5938 17.5112 52.0485 17.8749 52.6094 17.8749Z" fill="white"/>
            <Path d="M53.0156 24.375C53.5765 24.375 54.0312 23.9203 54.0312 23.3594C54.0312 22.7985 53.5765 22.3438 53.0156 22.3438C52.4547 22.3438 52 22.7985 52 23.3594C52 23.9203 52.4547 24.375 53.0156 24.375Z" fill="white"/>
            <Path d="M45.2969 25.9999C45.8578 25.9999 46.3125 25.5452 46.3125 24.9843C46.3125 24.4234 45.8578 23.9687 45.2969 23.9687C44.736 23.9687 44.2812 24.4234 44.2812 24.9843C44.2812 25.5452 44.736 25.9999 45.2969 25.9999Z" fill="white"/>
            </Svg>


        </View>
    )
}

export default Bottle