import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {currency} from '../../helpers/currency';
import style from '../../style/transfer';
import Icons from 'react-native-vector-icons/AntDesign';
import avatar from '../../assets/img/user_.webp';
import Button from '../../components/Button/BigButton';
import {UserData} from '../../redux/actions/User';
import PushNotification from 'react-native-push-notification';
import {showLocalNotification} from '../../helpers/handleNotification';

const TransferSuccess = (props) => {
  const {amount, note} = props.route.params;
  const [loading, setLoading] = useState(false);

  const {userdatatransaction, userdata} = useSelector((state) => state.User);
  const {token} = useSelector((state) => state.Auth);
  const {statustransfer} = useSelector((state) => state.Transfer);
  const {success, data} = statustransfer;
  const dispatch = useDispatch();

  const channelId = 'transfer-notification';
  useEffect(() => {
    setLoading(true);
    dispatch(UserData({token}));
    PushNotification.createChannel({
      channelId,
      channelName: 'transfer',
      channelDescription: 'transfer info',
    });
    if (success) {
      showLocalNotification(
        'Transfer Success',
        `to ${userdatatransaction.first_name}`,
        channelId,
      );
    }
    setLoading(false);
  }, []);

  const isActive = () => {
    return true;
  };
  return (
    <ScrollView style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      {success ? (
        <View style={{marginVertical: 50, alignItems: 'center'}}>
          <Icons name="checkcircle" size={80} color="#1EC15F" />
          <Text
            style={{
              color: '#383b40',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Transfer Success
          </Text>
        </View>
      ) : (
        <View style={{marginVertical: 50, alignItems: 'center'}}>
          <Icons name="closecircle" size={80} color="#FF5B37" />
          <Text
            style={{
              color: '#383b40',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Transfer Failed
          </Text>
        </View>
      )}
      <View
        style={{
          marginVertical: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#eeeeee',
          elevation: 1,
        }}>
        <View style={{zIndex: 0}}>
          <Image
            source={
              userdatatransaction.photo
                ? {uri: userdatatransaction.photo}
                : {avatar}
            }
            style={style.imgList}
          />
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>
            {userdatatransaction.first_name}
          </Text>
          <Text style={{color: '#383b40', paddingTop: 10}}>
            {userdatatransaction?.phone
              ? `${userdatatransaction?.phone}`
              : 'set your phone'}
          </Text>
        </View>
      </View>
      <Text style={{color: 'black', fontWeight: 'bold', margin: 10}}>
        Details
      </Text>
      <View
        style={{
          marginVertical: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#eeeeee',
          elevation: 1,
        }}>
        <View style={{zIndex: 0, paddingHorizontal: 10}}>
          <Text style={{color: '#383b40'}}>Amount</Text>
          <Text
            style={{
              color: '#383b40',
              paddingTop: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Rp {amount ? `${amount}` : 'NaN'}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#eeeeee',
          elevation: 1,
        }}>
        <View style={{zIndex: 0, paddingHorizontal: 10}}>
          <Text style={{color: '#383b40'}}>Balance Left</Text>
          <Text
            style={{
              color: '#383b40',
              paddingTop: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Rp {currency(parseInt(userdata.balance) - amount)}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#eeeeee',
          elevation: 1,
        }}>
        <View style={{zIndex: 0, paddingHorizontal: 10}}>
          <Text style={{color: '#383b40'}}>Date & Time</Text>
          <Text
            style={{
              color: '#383b40',
              paddingTop: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            date&time
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#eeeeee',
          elevation: 1,
        }}>
        <View style={{zIndex: 0, paddingHorizontal: 10}}>
          <Text style={{color: '#383b40'}}>Notes</Text>
          <Text
            style={{
              color: '#383b40',
              paddingTop: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {note}
          </Text>
        </View>
      </View>

      {success ? (
        <Button
          isActive={isActive}
          onSubmit={() => props.navigation.navigate('Home')}
          name={'Continue'}
        />
      ) : (
        <Button
          isActive={isActive}
          onSubmit={() => props.navigation.navigate('TransferAmount')}
          name={'Back To Home'}
        />
      )}
      {/* <Button isActive={isActive} onSubmit={onSubmit} name={'Continue'} /> */}
    </ScrollView>
  );
};

export default TransferSuccess;
