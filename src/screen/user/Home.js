import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from '../../style/home';
import avatar from '../../assets/img/user_.webp';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import io from 'socket.io-client';
import {SOCKET_URL} from '../../helpers/environment';
import PushNotification from 'react-native-push-notification';

function Home(props) {
  const {Auth, User} = useSelector((state) => state);
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', flexDirection: 'row'}}
          onPress={() => props.navigation.navigate('Profile')}>
          {User.userdata === undefined ? (
            <Image source={avatar} style={style.imgUser} />
          ) : User.userdata.photo !== null ? (
            <Image source={{uri: User.userdata.photo}} style={style.imgUser} />
          ) : (
            <Image source={avatar} style={style.imgUser} />
          )}
          <View style={{paddingLeft: 12}}>
            <Text style={{color: '#3a3d42', fontSize: 18}}>Hello,</Text>

            {User.userdata === undefined ? (
              <Text
                style={{color: '#3a3d42', fontSize: 18, fontWeight: 'bold'}}>
                null
              </Text>
            ) : User.userdata.photo !== null ? (
              <Text
                style={{color: '#3a3d42', fontSize: 18, fontWeight: 'bold'}}>
                {User.userdata.first_name}
              </Text>
            ) : (
              <Text
                style={{color: '#3a3d42', fontSize: 18, fontWeight: 'bold'}}>
                null
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notif')}
          style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon
            name="bell-outline"
            color="#3a3d42"
            size={30}
            // onPress={() => {
            // // dispatch(resetNumNotifCreator());
            // // navigation.navigate('notification');
            // }}
          />
        </TouchableOpacity>
      </View>
      <View style={style.balance}>
        <View style={style.balanceInfo}>
          <Text style={{color: '#ffffff', fontSize: 15}}>Balance</Text>
          {User.userdata === undefined ? (
            <Text style={style.balanceAmont}>Rp - </Text>
          ) : User.userdata.balance !== null ? (
            <Text style={style.balanceAmont}>{User.userdata.balance}</Text>
          ) : (
            <Text style={style.balanceAmont}>Rp - </Text>
          )}
          {User.userdata === undefined ? (
            <Text style={{color: '#ffffff', fontSize: 15}}>set your phone</Text>
          ) : User.userdata.phone !== null ? (
            <Text style={{color: '#ffffff', fontSize: 15}}>
              {User.userdata.phone}
            </Text>
          ) : (
            <Text style={{color: '#ffffff', fontSize: 15}}>set your phone</Text>
          )}
        </View>
      </View>
      <View style={style.operation}>
        <TouchableOpacity
          style={style.transfer}
          onPress={() => {
            props.navigation.navigate('Transfer');
          }}>
          <Icon name="arrow-up" color="#6379f4" size={30} />
          <Text style={style.operatText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.topUp}>
          <Icon2 name="plus" color="#6379f4" size={30} />
          <Text style={style.operatText}>Top Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Home;
