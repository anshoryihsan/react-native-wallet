import React, {useState} from 'react';
import style from '../../style/auth';
import styleLoading from '../../style/loading';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from 'react-native-elements';
import {AuthLogin} from '../../redux/actions/Auth';
import {useDispatch} from 'react-redux';
import Axios from 'axios';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const allEmpty = () => {
    if (email === '' || password === '') {
      return true;
    }
  };

  const onSubmit = async () => {
    setLoading(false);
    // console.log({email, password});
    // const url = 'https://localhost:8080/api/v1/auth/login';
    // await Axios.post(url, {email: 'a@a.com', password: 'a'})
    //   .then((res) => {
    //     console.log(res);
    //     // if (res.data.success) {
    //     //   // return dispatch(authSuccess(res.data.data));
    //     //   // if (res.data.data.role !== 24) return history.push('/home');
    //     //   // return history.push('/home');
    //     // } else {
    //     //   // return dispatch(authError(res.data.data));
    //     // }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // return dispatch(authError(err.data));
    //   });
    dispatch(AuthLogin({email, password}));
    setLoading(false);
  };

  return (
    <ScrollView style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      <Text style={style.brandName}>Zwallet</Text>
      <View style={style.content}>
        {loading ? (
          <ActivityIndicator color="black" style={styleLoading.loading} />
        ) : null}
        <View style={style.descript}>
          <Text style={style.header}>Login</Text>
          <Text style={style.subHeader}>
            Login to your existing account to access
          </Text>
          <Text style={style.subHeader}>all the features in Zwallet.</Text>
        </View>
        <View style={style.form}>
          <Input
            placeholder="Enter your mail"
            leftIcon={
              <Icon
                name="email-outline"
                size={24}
                color={email === '' ? '#383b40' : '#6379F4'}
              />
            }
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Input
            placeholder="Enter your password"
            leftIcon={
              <Icon
                name="lock-outline"
                size={24}
                color={password === '' ? '#383b40' : '#6379F4'}
              />
            }
            rightIcon={
              <Icon
                name={!show ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#383b40"
                onPress={() => {
                  setShow(!show);
                }}
              />
            }
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry={show}
          />
        </View>
        <Text
          style={style.forgot}
          onPress={() => {
            // Navigation.navigate('');
          }}>
          Forgot password?
        </Text>
        <TouchableOpacity
          onPress={onSubmit}
          style={allEmpty() ? style.loginBtn : style.loginBtnActive}>
          <Text style={allEmpty() ? style.loginText : style.loginTextActive}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}>
          <Text style={style.signup}>
            Don't have an account? Let's
            <Text style={style.signup_}> Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Login;
