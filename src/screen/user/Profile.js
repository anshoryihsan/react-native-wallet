import React, {useState} from 'react';
import {AuthLogout} from '../../redux/actions/Auth';
import {ClearUserHistory, UploadPhoto} from '../../redux/actions/User';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  SectionList,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  Switch,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import style from '../../style/Profile';
import avatar from '../../assets/img/user_.webp';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';

const Profile = (props) => {
  const {User} = useSelector((state) => state);
  const {token} = useSelector((state) => state.Auth);

  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleSwitch = () => setIsEnabled((f) => !f);
  const dispatch = useDispatch();

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const handleLogout = () => {
    dispatch(AuthLogout());
    dispatch(ClearUserHistory());
  };
  const handleChoose = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'image',
      },
      (response) => {
        // console.log(response);
        const formData = new FormData();
        formData.append('file', {
          mimetype: response.type,
          uri: response.uri,
          originalname: response.fileName,
        });
        dispatch(UploadPhoto(token, {last_name: 'asad', pin: 555555}));
      },
    );
    // const options = {
    //   title: 'select-picture',
    //   storageOptions: {
    //     mediaType: 'image',
    //   },
    // };
    // ImagePicker.showImagePicker(options, (response) => {
    //   // console.log(response, 'option photo/galeri');
    //   if (response.didCancel) {
    //     ToastAndroid.show('Cancle', ToastAndroid.SHORT);
    //   } else if (response.error) {
    //     ToastAndroid.show(response.error, ToastAndroid.SHORT);
    //   } else {
    //     // (response) => {
    //     console.log(response);
    //     const formData = new FormData();
    //     formData.append('image', {
    //       uri: response.uri,
    //       name: response.fileName,
    //       type: response.type,
    //     });
    //     console.log(formData, 'photo');
    //     dispatch(UploadPhoto(formData, token));
    //     // };
    //   }
    // });
  };
  return (
    <View style={style.container}>
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
        <Text style={style.textFnd}>Personal Information</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.profile}>
          <Image
            source={
              User?.userdata?.photo ? {uri: User.userdata.photo} : {avatar}
            }
            style={style.imgUser}
          />
        </View>
        <View style={style.profile}>
          <TouchableOpacity style={style.edit} onPress={() => handleChoose()}>
            <Icon name="edit-2" color="#7A7886" />
            <Text style={style.editTxt}>Edit</Text>
          </TouchableOpacity>
          {User.userdata === undefined ? (
            <Text style={style.name}>null</Text>
          ) : User.userdata.first_name !== null ? (
            <Text style={style.name}>{User.userdata.first_name}</Text>
          ) : (
            <Text style={style.name}>null</Text>
          )}
          {User.userdata === undefined ? (
            <Text style={style.phone}>set your phone</Text>
          ) : User.userdata.phone !== null ? (
            <Text style={style.phone}>{User.userdata.phone}</Text>
          ) : (
            <Text style={style.phone}>set your phone</Text>
          )}
        </View>
        <View style={{padding: 20}}>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              props.navigation.navigate('PersonalInfo');
            }}>
            <Text style={style.nameOperation}>Personal Information</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              props.navigation.navigate('ChangePassword');
            }}>
            <Text style={style.nameOperation}>Change Password</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              props.navigation.navigate('ChangePin');
            }}>
            <Text style={style.nameOperation}>Change PIN</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
          <View style={style.listOperation}>
            <Text style={style.nameOperation}>Notification</Text>
            <Switch
              trackColor="#81b0ff"
              thumbColor="#f4f3f4"
              onValueChange={toggleSwitch}
              // value
            />
          </View>
          <TouchableOpacity
            style={style.listOperation}
            onPress={() => {
              toggleOverlay();
            }}>
            <Text style={style.nameOperation}>Logout</Text>
            <Icon name="arrow-right" size={20} color="#4D4B57" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* overlay */}
      <Overlay
        overlayStyle={overlayStyle.container}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <View>
          <Text style={overlayStyle.title}>Logout?</Text>
          <View style={overlayStyle.btnOperation}>
            <TouchableOpacity
              style={overlayStyle.btnYes}
              onPress={() => {
                handleLogout();
              }}>
              <Text style={overlayStyle.textYes}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={overlayStyle.btnNo}
              onPress={toggleOverlay}>
              <Text style={overlayStyle.textNo}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <Overlay isVisible={loading} overlayStyle={overlayStyle.loading}>
        <ActivityIndicator
          color="red"
          size="large"
          style={overlayStyle.indicator}
        />
      </Overlay>
    </View>
  );
};

export default Profile;

const overlayStyle = StyleSheet.create({
  container: {
    padding: 20,
    width: '80%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnOperation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btnYes: {
    borderRadius: 12,
    alignItems: 'center',
    padding: 15,
    width: 90,
    backgroundColor: '#6379F4',
  },
  btnNo: {
    borderRadius: 12,
    alignItems: 'center',
    padding: 15,
    width: 90,
    backgroundColor: '#CDCCCC',
  },
  textYes: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textNo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backfaceVisibility: 'hidden',
  },
});
