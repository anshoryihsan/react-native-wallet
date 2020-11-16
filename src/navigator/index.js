import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UserData} from '../redux/actions/User';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, SignUp, CreatePIN, SignUpSuccess} from '../screen/auth';
import {
  Home,
  Transfer,
  TransferAmount,
  TransferConfirm,
  TransferPIN,
  TransferSuccess,
  Profile,
  TopUp,
  SplashScreen,
  PersonalInfo,
  ChangePassword,
  ChangePin,
  Notif,
} from '../screen/user';

const Stack = createStackNavigator();

export default function MainNavigator(props) {
  const dispatch = useDispatch();
  const {isUser, isAdmin, token} = useSelector((state) => state.Auth);
  useEffect(() => {
    if (token) {
      dispatch(UserData(token));
    }
  }, [token]);
  return (
    <NavigationContainer>
      {isUser && token ? (
        <HomeStack navigation={props.navigation} />
      ) : (
        <AuthStack navigation={props.navigation} />
      )}
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferAmount"
        component={TransferAmount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferConfirm"
        component={TransferConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferPIN"
        component={TransferPIN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferSuccess"
        component={TransferSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePin"
        component={ChangePin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notif"
        component={Notif}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePIN"
        component={CreatePIN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpSuccess"
        component={SignUpSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
