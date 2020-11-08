import React, {useState} from 'react';
import style from '../../style/home';
import avatar from '../../assets/img/user_.webp';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Input} from 'react-native-elements';

function Home(props) {
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
          onPress={() => props.navigation.navigate('profile')}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              resizeMode: 'cover',
            }}
            source={avatar}
          />
          {/* {auth.data === undefined ? (
                <Image source={imgUser} style={style.imgUser} /> ) : 
                auth.dataUser.picture !== null ? (
                <Image
                source={{ uri: auth.dataUser.picture }}
                style={style.imgUser}
                />
                ) : (
                <Image source={imgUser} style={style.imgUser} />
                )} */}
          <View style={{paddingLeft: 12}}>
            <Text style={{color: '#3a3d42', fontSize: 18}}>Hello,</Text>
            <Text style={{color: '#3a3d42', fontSize: 18, fontWeight: 'bold'}}>
              Robert
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => props.navigation.navigate('profile')}
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
        <View
          style={{
            flexDirection: 'column',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}>
          <Text style={{color: '#ffffff', fontSize: 15}}>Hello,</Text>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 30,
              paddingBottom: 11,
              paddingTop: 11,
              fontWeight: 'bold',
            }}>
            Rp100
          </Text>
          <Text style={{color: '#ffffff', fontSize: 15}}>Robert</Text>
        </View>
      </View>
      <View style={style.operation}>
        <TouchableOpacity
          style={style.transfer}
          //onPress={() => navigation.navigate('receiver')}
        >
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
