import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import ArrowBackwardLeftIcon from '../SVGComponents/ArrowBackwardLeftIcon'

export const AboutPartnerSitePage = (props) => {
    const{navigation: { goBack }}=props
    const route = useRoute()
     const data=route.params.item

  return (
    <SafeAreaView>
        <View style={[styles.pageContainer, { width: "100%"}]}>
        <View style={styles.navCase}>
            <TouchableOpacity
                    style={styles.backwardButton}
                    onPress={()=>goBack()}
            >
                <Text><ArrowBackwardLeftIcon/></Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={styles.mainContentCase}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                About {data.partnerName}
            </Text>
        </View>
            <Image source={data.view} resizeMode='cover' style={styles.image}/>
        <View style={styles.subContainer}>
            <Text style={styles.headerText}>
                 OUR IDENTITY
            </Text>
            <Text style={styles.paragraphText}>
                {data.ourIdentity}
            </Text>
        </View>

        <View style={styles.subContainer}>
            <Text style={styles.headerText}>
                PURPOSE
            </Text>
            <Text style={styles.paragraphText}>
               {data.purpose}
            </Text>
        </View>

        <View style={styles.subContainer}>
            <Text style={styles.headerText}>
                ORIGINS
            </Text>
            <Text style={styles.paragraphText}>
                {data.origin}
            </Text>
        </View>

        <View style={styles.subContainer}>
            <Text style={styles.headerText}>
                 Website
            </Text>
            <TouchableOpacity style={styles.linkerButton}>
                <Text style={styles.linkerButtonText}>
                    Go to Our website
                </Text>
            </TouchableOpacity>
        </View>

        </ScrollView>
        </View>
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
    pageContainer: {
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'space-around',
        alignItems: "center",
        width: "100%",
        height: "100%",
        },

    navCase: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingLeft: "3%",
    },

    image:{
        display: 'flex',
        width:"100%",
        height: 301,
        borderRadius: 12,
        marginBottom: 20
        },

    backwardButton:{
        display: 'flex',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: 43,
        height: 43,
        borderRadius:50,
        paddingTop:5,
        backgroundColor: "#F2F2F2",
    },

    mainContentCase:{
        display: 'flex',
        flexDirection:"column",
        width: "100%",
        // backgroundColor: "#b3b3b3",
        padding: "6%",
    },

    headerContainer:{
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },

    headerText:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
        color: "#4B4B4B",
        marginBottom: 15,
    },

    paragraphText:{
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 12,
        lineHeight: 16, 
        color: "#4B4B4B",
        marginBottom: 15,
    },

    linkerButton:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#1E7911",
        borderRadius: 12,
        height: 141,
    },

    linkerButtonText:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
        color: "#FFFFFF",
    }
 
})
