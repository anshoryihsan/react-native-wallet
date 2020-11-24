import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import ContacList from '../../components/searchContact/contactList';
import style from '../../style/transfer';
import Icon from 'react-native-vector-icons/AntDesign';

import styletrans from '../../style/historytrans';
import avatar from '../../assets/img/user_.webp';

import {GetAllUserData, getUserId} from '../../redux/actions/User';

const Transfer = (props) => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const {loading, getalluserdata} = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(GetAllUserData(token, name, page));
  }, [dispatch, token, name, page]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styletrans.itemList}
        onPress={() => {
          dispatch(getUserId(token, item.id));
          props.navigation.navigate('TransferAmount');
        }}>
        <View style={styletrans.user}>
          <Image source={avatar} style={styletrans.imgList} />
          <View style={styletrans.userName}>
            <Text style={{color: '#4D4B57', fontSize: 16}}>
              {item.first_name}
            </Text>
            <Text style={{color: '#7A7886', fontSize: 14}}>{item.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
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
        <Text style={style.textFnd}>Find Receiver</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={style.searchBar}>
          <Icon name="search1" size={20} color="#A9A9A9" />
          <TextInput
            placeholder="Search receiver here"
            onChangeText={(name) => setName(name)}
            defaultValue={name}
          />
        </View>
      </View>
      <View style={style.content}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 14, marginBottom: 10}}>All Contacts</Text>
          {/* <ContacList navigation={props} namesearch={name} /> */}
          {/* <ActivityIndicator size="large" /> */}

          {loading ? (
            <ActivityIndicator size="large" color="#6379f4" />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={getalluserdata}
              style={styletrans.flatList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              // onEndReached={loadMore}
              onEndReachedThreshold={0.5}
              initialNumToRender={4}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Transfer;
