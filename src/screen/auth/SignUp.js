import React,{useState} from 'react';
import style from '../../style/auth'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';

function SignUp(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(true);

    const allEmpty = () => {
        if (email === '' || pass ==='' || name === ''){
            return true;
        }
    };

  return (
    <ScrollView style={style.container}>
        <Text style={style.brandName}>Zwallet</Text>
      <View style={style.content}>
        <View style={style.descript}>
            <Text style={style.header}>Sign Up</Text>
            <Text style={style.subHeader}>Create your account to access Zwallet.</Text>     
        </View>
        <View style={style.form}>
            <Input
            placeholder='Enter your username'
            leftIcon={
                <Icon
                name='account-outline'
                size={24}
                color={name === '' ? '#878787' : '#6379F4'}/>
            }
            onChangeText={(text)=>{
                setName(text);
            }}/>
            <Input
            placeholder='Enter your mail'
            leftIcon={
                <Icon
                name='email-outline'
                size={24}
                color={email === '' ? '#878787' : '#6379F4'}/>
            }
            onChangeText={(text)=>{
                setEmail(text);
            }}/>
            <Input
            placeholder='Enter your password'
            leftIcon={
                <Icon
                name='lock-outline'
                size={24}
                color={pass === '' ? '#878787' : '#6379F4'}/>
            }
            rightIcon={
                <Icon
                name={!show ? 'eye-outline':'eye-off-outline'}
                size={24}
                color='#878787'
                onPress={() => {
                    setShow(!show);
                }}/>
            }
            onChangeText={(text)=>{
                setPass(text);
            }}
            secureTextEntry={show}/>
        </View>
        <TouchableOpacity
            onPress={()=>{
                if (!allEmpty()) {
                    //dispatch(login)
                }
            }}
            style={allEmpty() ? style.loginBtn : style.loginBtnActive}>
            <Text style={allEmpty()?style.loginText : style.loginTextActive}>
            Sign Up
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('Login');
            }}>
            <Text style={style.signup}>
                Already have an account? Let’s
                <Text style={style.signup_}> Login</Text>
            </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default SignUp;
