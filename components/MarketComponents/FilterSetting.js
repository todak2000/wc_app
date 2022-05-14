import Slider from '@react-native-community/slider';
import React, {useState} from 'react'
import { TouchableOpacity,StyleSheet, View, Text, Image, TextInput,} from 'react-native';
import { CheckBox } from 'react-native-elements'
import FilterIcon from '../SVGComponents/FilterIcon';
import TimesIcon from '../SVGComponents/TimesIcon';
import FilterDropDown from './FilterDropDown';

const FilterHeader =[

    {text: "All", id:1},
    {text:"Trending",id:2},
   {text:"Popular",id:3},
    {text:"Recent",id:4}
]

// const filterSpecific =[
//     {text: "Name", id:1},
//     {text:"Date",id:2},
//    {text:"Partners",id:3},


const selectionOption =[
    "WC 0 - 20k","WC 20 - 40k","WC 40 - 60k","WC 60 - 80k","WC 80 - 100k"
]
// const data = 70

const FilterSetting = (props) => {
    const{toggleChange}=props

    const [selected,setSelected]=useState("")
    const [filterLevel, setFilterLevel]=useState("All")
    const [nameStore, setNameStore]=useState("")
    const [partnerStore, setPartnerStore]=useState("")
    const [dateStore, setDateStore]=useState("")
    const [range, setRange]=useState("")
// Toggler Control
    const [name, setName]=useState(false)
    const [partner, setPartner]=useState(false)
    const [date, setDate]=useState(false)

   
    console.log(nameStore,partnerStore,dateStore);

    const handleName =()=>{
        setName(!name)
        if(name=== false){
            setNameStore("Name")
        }else{
            setNameStore("")
        }
    }
    const handleDate =()=>{
        setDate(!date)
        if(date=== false){
            setDateStore("Date")
        }else{
            setDateStore("")
        }
    }
    const handlePartners =()=>{
        setPartner(!partner)
        if(partner=== false){
            setPartnerStore("partner")
        }else(
            setPartnerStore("")
        )
    }
    



  return (
    <View style={styles.modalCase}>
        <View style={styles.closeCase}>
            <TouchableOpacity style={styles.modalClose}  onPress={toggleChange}>
                <TimesIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.greenPart}>
            <View style={styles.filterTitle}>
                <FilterIcon/>
                <Text style={styles.filterText}>Filter Shop</Text>
            </View>
            <View style={styles.filterButtonHolder} >
                {FilterHeader?.map((item)=>(
                    <TouchableOpacity key={item.id} style={filterLevel===item.text?  styles.filterButton : styles.filterButtonNeutral} onPress={()=>setFilterLevel(item.text)}>
                        <Text style={styles.filterButtonText}>{item.text}</Text>
                 </TouchableOpacity>
                ))}
            </View>
            <View style={styles.checkerContainer}>
                <Text style={styles.containerHeader}>
                    Offer type
                </Text>
                <View style={styles.checkBoxCase} >
                    <Text style={styles.textLabel}>Name</Text>
                    <CheckBox
                        checked={name}
                        onPress={()=>handleName()}
                        iconRight
                        checkedColor='#87DC7A'
                        style={styles.checker}
                    />
                </View>
                <View style={styles.checkBoxCase}>
                    <Text style={styles.textLabel}>Date</Text>
                    <CheckBox
                        checked={date}
                        onPress={()=>handleDate()}
                        iconRight
                        checkedColor='#87DC7A'
                        style={styles.checker}
                    />
                </View>
                <View style={styles.checkBoxCase}>
                    <Text style={styles.textLabel}>Partners</Text>
                    <CheckBox
                        checked={partner}
                        onPress={()=>handlePartners()}
                        iconRight
                        checkedColor='#87DC7A'
                        style={styles.checker}
                    />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.selectionContainer}> 
                        <View>
                            <Text style={styles.priceHeader}>Price Range</Text>
                            <Text style={styles.priceRanger}>{selected}</Text>
                        </View>
                        {/* <TouchableOpacity style={styles.selectionButton}>
                            <Text style={styles.selectionButtonText}>
                                press
                            </Text>
                        </TouchableOpacity> */}
                        <FilterDropDown
                            option={selectionOption}
                            selected={selected}
                            setSelected={setSelected}
                        />
                </View>
                <View style={styles.sliderHolder}>
                <Slider
                    // disabled="true"
                    // value={range}
                    style={{width: 300, height: 70,}}
                    onValueChange={(value)=>setRange(value)}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#87DC7A"
                    maximumTrackTintColor="#FFFFFF"
                    // customCountStyle=i
                />
                <Text style={styles.sliderPriceText}>
                    Pick Price:
                   <Text style={styles.priceText}> {Math.floor(range*100)}K</Text> 
                </Text>
                </View>
            </View>
            
            




        
           
            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Apply filter</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}
export default FilterSetting;
const styles = StyleSheet.create({
 modalCase:{
        width: "90%",
        left: 20,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "rgba(20, 98, 9, 1)",
        padding: 20,
        height: "90%"
    },
    closeCase:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: 40,
    },
    modalClose:{
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignContent: "center",
        width: 40,
        
    },
    greenPart:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        width: "100%",
        height: "100%"
    },
    sliderHolder:{
        zIndex: -1
    },
    filterTitle:{
        display: 'flex',
        flexDirection: "row",
        justifyContent:"center",
      },
      filterText:{
        marginLeft: 4,
        color: "#ffffff",
      },
      filterButton:{
        width: 80,
        height: 26,
        backgroundColor: "#87DC7A",
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
      },
      filterButtonNeutral:{
        width: 80,
        height: 26,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
      },
      filterButtonText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF",
      },
      filterButtonHolder:{
          display: 'flex',
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
      },
      checkerContainer:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        borderColor: "#FFFFFF",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingLeft: 20,
    },
        checkBoxCase:{
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
        },
        checker:{
            width: 10,
            height: 10,
        },
        containerHeader:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: 14,
            color: "#87DC7A",
            marginTop: 20,
        },
        textLabel:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: 14,
            color: "#FFFFFF",
        },
        bottomContainer:{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
        selectionContainer:{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 40,
            paddingLeft: 20,
        },
        priceHeader:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: 14,
            color: "#87DC7A"
        },
        priceRanger:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: 14,
            color: "#FFFFFF",
        },
        // selectionButton:{
        //     width: 103,
        //     height: 26,
        //     backgroundColor: "#87DC7A",
        //     borderColor:"#FFFFFF",
        //     borderWidth: 1,
        //     display: 'flex',
        //     flexDirection: "column",
        //     justifyContent: "center",
        //     alignItems: "center"
        // },
        // selectionButtonText:{
        //     color:"#FFFFFF"
        // },

    confirmButton:{
        width: 271,
        height: 54,
        backgroundColor: "#FFFFFF",
        shadowColor: "rgb(79, 154, 81)",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 1,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        marginTop: 20,
        
    },
    confirmButtonText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: "#4F9A51",
        padding: 4,
    },
    sliderPriceText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#87DC7A" 
    },
    priceText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF" 
    }
    
})