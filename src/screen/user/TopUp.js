import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from '../../style/Profile';
import {useSelector, useDispatch} from 'react-redux';
import {GetDataTopUp} from '../../redux/actions/TopUp';

const TopUp = (props) => {
  const {token} = useSelector((state) => state.Auth);
  const {datahowtopup} = useSelector((state) => state.TopUp);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetDataTopUp(token));
  }, [dispatch, token]);

  const renderItem = ({item, index}) => {
    console.log(index, 'data TOP UPPPPPPPPP');
    return (
      <View
        style={{
          height: 60,
          backgroundColor: 'white',
          borderWidth: 0.2,
          borderColor: '#EAECEE',
          elevation: 0.5,
          borderRadius: 8,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', height: 30, margin: 10}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontweigth: 'bold', color: '#7A7886'}}>
              {index + 1}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#7A7886', fontSize: 14}}>{item.article}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      <ScrollView>
        <View style={style.nav}>
          <Icon
            style={style.iBack}
            name="arrowleft"
            size={25}
            color="black"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <Text style={style.textFnd}>Top Up</Text>
        </View>
        <View style={style.content}>
          <View
            style={{
              height: 60,
              backgroundColor: 'white',
              borderWidth: 0.2,
              borderColor: '#EAECEE',
              elevation: 0.5,
              borderRadius: 8,
            }}>
            <View style={{flexDirection: 'row', height: 30, margin: 10}}>
              <View
                style={{
                  backgroundColor: '#EAECEE',
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="plus" color="#6379f4" size={15} />
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#7A7886', fontSize: 14}}>
                  Virtual Account Number
                </Text>
                <Text
                  style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
                  2389 081393877946
                </Text>
              </View>
            </View>
          </View>
          <View style={{margin: 10}}>
            <Text style={{textAlign: 'center', color: '#7A7886'}}>
              You must enter your current password and then type your new
              password twice.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 10,
                color: '#3a3d42',
                fontWeight: 'bold',
              }}>
              How To Top-Up
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={true}
            data={datahowtopup}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopUp;
