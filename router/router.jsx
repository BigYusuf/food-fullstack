import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signUp";
import ForgotPwdScreen from "../screens/forgotPwd";
import { COLORS } from "../constants/theme";
import CartScreen from "../screens/cart";
import HomeScreen from "../screens/home";
import HistoryScreen from "../screens/history";
import FavoriteScreen from "../screens/favorites";
import ProfileScreen from "../screens/profile";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons , Ionicons } from '@expo/vector-icons'; 

/*
const authStack = createStackNavigator({
    signin: { 
        component: SignInScreen,
       // navigationOptions: {headerShown: false}
    },
    signup: { 
        component: SignUpScreen,
     //   navigationOptions: {headerShown: false}
    },
    forgotpwd: { 
        component: ForgotPwdScreen,
        navigationOptions: {
            headerTitle: "",
            headerBackTitle: "back",
            headerBackTitleVisible: true,
            headerBackTitleStyle: {
                fontWeight: "bold",
                textTransform:"lowercase"
            },
            headerTintColor: COLORS.white,
            headerStyle: {
                backgroundColor: COLORS.primary
            }
        }
    },
});
*/

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signin" component={SignInScreen}
         options={{ headerShown: false }} />

        <Stack.Screen name="signup" component={SignUpScreen} 
         options={{ headerShown: false }} />

        <Stack.Screen name="forgotpwd" component={ForgotPwdScreen} 
         options={{  headerTitle: "",
         headerShown: true,
         headerBackTitle: "back",
         headerBackVisible: true,
         headerBackTitleVisible: true,
         headerBackTitleStyle: {
             fontWeight: "bold",
             textTransform:"lowercase"
         },
         headerTintColor: COLORS.white,
         headerStyle: {
             backgroundColor: COLORS.primary
         } }} />
      </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();

const BottomStack = () => {
    return(
      <Tab.Navigator  
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                return <Ionicons name={iconName} size={focused ? 25: 20} color={color} />;
            } else if (route.name === 'History') {
                iconName = focused ? 'history' : 'history';
                return<MaterialCommunityIcons name={iconName} size={focused ? 25: 20} color={color} />
            } else if (route.name === 'Cart') {
                iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                return <Ionicons name={iconName} size={focused ? 25: 20} color={color} />;
              } else if (route.name === 'Favorite') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                return <Ionicons name={iconName} size={focused ? 25: 20} color={color} />;
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
                return <Ionicons name={iconName} size={focused ? 25: 20} color={color} />;
              }
            },  
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarLabelStyle:{
                fontWeight: "bold"
            },
            tabBarStyle:{
                paddingTop: 5,
                height: 60
            },
        })}>
        <Tab.Screen name="History" component={HistoryScreen} options={{}} />
        <Tab.Screen name="Cart" component={CartScreen}  />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
}

const HomeStack = () => {
    return(
        <Stack.Navigator

        screenOptions={{
            headerShown:true,
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerTitle: "BigYusuf Foods",
            headerTitleStyle: {
                fontWeight: "800",
                color: COLORS.white
            },
        }}>
        
        <Stack.Screen name="HomeStack" component={HomeScreen}
        />
        </Stack.Navigator>
    )
}

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator

            screenOptions={{
                
            }}>
            
            <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }}/>
            <Stack.Screen name="BottomStack" component={BottomStack} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const router = MainStack

export default router;