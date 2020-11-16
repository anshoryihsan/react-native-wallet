import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import style from '../../style/Profile';
import Icon from 'react-native-vector-icons/AntDesign';
import {Overlay} from 'react-native-elements';
import CellPhone from 'react-native-vector-icons/Feather';
import {UpdateUserData} from '../../redux/actions/User';

function PersonalInfo(props) {
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const {userdata} = useSelector((state) => state.User);
  const {token} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const getName = userdata.first_name.split(' ');
  const firstName = getName[0];
  const lastName = () => {
    if (getName.length > 0) return getName[1];
  };

  const handleSubmit = () => {
    if (phone === null) {
      setVisible(!visible);
    } else {
      setVisible(!visible);
      dispatch(UpdateUserData(token, {phone: phone}));
    }
  };
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
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
        <Text style={style.textFnd}>Personal Information</Text>
      </View>
      <View style={innerStyle.content}>
        <Text style={innerStyle.title}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>First Name</Text>
          <Text style={innerStyle.subTitle}>{firstName}</Text>
        </View>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>Last Name</Text>
          <Text style={innerStyle.subTitle}>{lastName()}</Text>
        </View>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>Verified E-mail</Text>
          {userdata.email === null ? (
            <Text style={innerStyle.subTitle}>email empty</Text>
          ) : (
            <Text style={innerStyle.subTitle}>{userdata.email}</Text>
          )}
        </View>
        <View style={innerStyle.list}>
          <Text style={innerStyle.listTitle}>Phone Number</Text>
          {userdata.phone === null ? (
            <Text style={innerStyle.subTitle}>email empty</Text>
          ) : (
            <Text style={innerStyle.subTitle}>{userdata.phone}</Text>
          )}
          <Text
            style={innerStyle.manage}
            onPress={() => {
              setVisible(!visible);
            }}>
            Manage
          </Text>
        </View>
      </View>
      <Overlay
        isVisible={visible}
        overlayStyle={innerStyle.overlay}
        onBackdropPress={() => {
          setVisible(!visible);
        }}>
        <>
          <View style={innerStyle.form}>
            <CellPhone
              name="phone"
              size={20}
              color="#6379F4"
              style={innerStyle.icon}
            />
            <TextInput
              defaultValue={userdata.phone}
              onChangeText={(text) => setPhone(text)}
              keyboardType="phone-pad"
              style={innerStyle.input}
            />
          </View>

          <TouchableOpacity
            style={innerStyle.save}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={innerStyle.saveText}>Save</Text>
          </TouchableOpacity>
        </>
      </Overlay>
    </View>
  );
}

export default PersonalInfo;

const innerStyle = StyleSheet.create({
  content: {
    padding: 20,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40,
    color: '#7A7886',
    fontSize: 16,
  },
  list: {
    backgroundColor: 'white',
    padding: 10,
    height: 75,
    justifyContent: 'space-around',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 0.2,
    borderColor: '#EAECEE',
    elevation: 0.5,
  },
  listTitle: {
    color: '#7A7886',
    fontSize: 16,
  },
  subTitle: {
    color: '#514F5B',
    fontSize: 22,
    fontWeight: 'bold',
  },
  manage: {
    position: 'absolute',
    right: 10,
    top: '50%',
    color: '#6379F4',
    fontSize: 16,
  },
  overlay: {
    width: '70%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '90%',
    paddingLeft: 30,
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: '30%',
  },
  save: {
    backgroundColor: '#6379F4',
    padding: 10,
    width: 80,
    alignItems: 'center',
    borderRadius: 10,
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
