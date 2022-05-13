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
    // Rubik: Rubik,
    Rubik700:Rubik_700Bold,
    Rubik300:Rubik_300Light,
    Rubik400:Rubik_400Regular,
    RubikBold:Rubik_900Black
    // Rubik: require("../assets/fonts/Rubik.ttf")

  });
}