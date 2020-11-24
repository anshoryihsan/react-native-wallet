import React, {useState} from 'react';
import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {currency} from '../../helpers/currency';
import style from '../../style/transfer';
import Icon from 'react-native-vector-icons/Feather';
import avatar from '../../assets/img/user_.webp';
import Button from '../../components/Button/BigButton';

const TransferConfirm = (props) => {
  const {amount, note} = props.route.params;
  const [loading, setLoading] = useState(false);

  const {userdatatransaction, userdata} = useSelector((state) => state.User);

  const onSubmit = () => {
    setLoading(true);
    props.navigation.navigate('TransferPIN', {
      amount: amount,
      note: note,
    });
    setLoading(false);
  };

  const isActive = () => {
    return true;
  };
  return (
    <ScrollView style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      <View style={style.nav}>
        <Icon
          style={style.iBack}
          name="arrow-left"
          size={25}
          color="black"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={style.textFnd}>Confirmation</Text>
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

      <Button isActive={isActive} onSubmit={onSubmit} name={'Continue'} />
    </ScrollView>
  );
};

export default TransferConfirm;
