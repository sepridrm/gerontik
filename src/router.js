import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from "native-base";
import { getAuthUser } from "./utils/helpers";
import StatusBar from "./components/CustomStatusBar";
import TitleHeader from "./components/TitleHeader";
import Login from "./screens/login";
import Home from "./screens/home";
import Register from "./screens/register";
import Profile from "./screens/profile"
import Pasien from "./screens/pasien";
import OpenCamera from "./components/OpenCamera";
import Menu from "./screens/menu";
import BukuKehidupan from "./screens/buku-kehidupan";
import KMS from "./screens/kms";
import PSM from "./screens/psm";
import PRJ from "./screens/prj";
import LivingCare from "./screens/living-care";
import { StyleSheet } from 'react-native';
import Pengkajian from "./screens/pengkajian";
import Evaluasi from "./screens/evaluasi"
import Kuesioner from "./screens/kuesioner"
import PasienEvaluasi from "./screens/pasien-evaluasi"

const Route = ({ navigation }) => {
  getAuthUser().then(res => {
    !res.isLogin ? navigation.replace('Login') : navigation.replace('Home');
  })

  return null;
}

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NativeBaseProvider>
      <StatusBar color="white" />
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen name="Route" component={Route} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ title: <TitleHeader text="Home"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="Profile" component={Profile} options={{ title: <TitleHeader text="Profile"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="Pasien" component={Pasien} options={{ title: <TitleHeader text="Tambah Pasien"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="Menu" component={Menu} options={{ title: <TitleHeader text="Menu"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="BukuKehidupan" component={BukuKehidupan} options={{ title: <TitleHeader text="Buku Kehidupan"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="KMS" component={KMS} options={{ title: <TitleHeader text="Kartu Menuju Sehat"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="LivingCare" component={LivingCare} options={{ title: <TitleHeader text="Living Care"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>

          <Stack.Screen name="PSM" component={PSM} options={{ title: <TitleHeader text="Pengkajian Status Mental"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="PRJ" component={PRJ} options={{ title: <TitleHeader text="Pengkajian Resiko Jatuh"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="Pengkajian" component={Pengkajian} options={{ title: <TitleHeader text="Pengkajian AsKep"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="Evaluasi" component={Evaluasi} options={{ title: <TitleHeader text="Evaluasi"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="Kuesioner" component={Kuesioner} options={{ title: <TitleHeader text="Kuesioner"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>
          <Stack.Screen name="PasienEvaluasi" component={PasienEvaluasi} options={{ title: <TitleHeader text="Evaluasi"/>, headerStyle: styles.headerStyle, headerTitleAlign : 'center' }}/>

          <Stack.Screen name="OpenCamera" component={OpenCamera} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default StackNavigator

const styles = StyleSheet.create({
  headerStyle: {elevation: 1, shadowOpacity: 0 }
})