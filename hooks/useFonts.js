import * as Font from 'expo-font';
// import { Rubik } from 'expo-google-fonts/Rubik';
import { 
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic 
} from '@expo-google-fonts/rubik'
import { Rubik } from '../assets/fonts/Rubik.ttf';

export default useFonts = async () => {
  await Font.loadAsync({
    Rubik: Rubik,
    // Rubik: require("../assets/fonts/Rubik.ttf")

  });
}