import React, {useState} from 'react';
import style from '../../style/auth';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Image, Input} from 'react-native-elements';
import InputPin from '../../components/InputText/InputPIN';
import Button from '../../components/Button/BigButton';
import {useDispatch} from 'react-redux';
import {AuthSignup} from '../../redux/actions/Auth';
import Icons from 'react-native-vector-icons/AntDesign';

function SignUpSuccess(props) {
  const {route} = props;
  const {params} = route;
  // console.log(params);
  const [pin, setPin] = useState(0);
  const [loading, setLoading] = useState(false);

  const data = {...params, pin};
  // console.log(data);
  //   console.log(props, 'inprops');
  // const {} = useSelector(state => state.Auth)
  const dispatch = useDispatch();

  const onSubmit = () => {
    ToastAndroid.show('loading....', ToastAndroid.SHORT);
    dispatch(AuthSignup(data, props.navigation));
    setLoading(true);
    // if (pin) {
    // } else {
    //   ToastAndroid.show('fill out the form correctly!', ToastAndroid.LONG);
    // }
    setLoading(false);
  };

  const isActive = () => {
    return true;
  };

  return (
    <ScrollView>
      <SafeAreaView style={style.container}>
        <Text style={style.brandName}>Zwallet</Text>
        <View style={style.content}>
          <View style={style.descript}>
            <View
            // style={{
            //   // backgroundColor: ,
            //   padding: 10,
            //   borderRadius: 50,
            //   marginBottom: 10,
            // }}
            >
              <Icons name="checkcircle" size={80} color="#1EC15F" />
            </View>
            <Text style={style.headerSuccess}>
              Your PIN Was Successfully Created.
            </Text>
            <Text style={style.subHeaderSuccess}>
              CYour PIN was successfully created and you can
            </Text>
            <Text style={style.subHeaderSuccess}>
              now access all the features in Zwallet. Login to your
            </Text>
            <Text style={style.subHeaderSuccess}>
              new account and start exploring!
            </Text>
          </View>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 80}}>
            <Button
              isActive={isActive}
              onSubmit={onSubmit}
              name={'Confirm'}
              loading={loading}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
export default SignUpSuccess;
