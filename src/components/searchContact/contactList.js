import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
  // ScrollView,
  // TouchableWithoutFeedback,
} from 'react-native';
// import {
//   getContactCreator,
//   getMoreContactCreator,
//   getContactIdCreator,
// } from '../../redux/actions/contact';
import style from '../../style/historytrans';
import avatar from '../../assets/img/user_.webp';

import {GetAllUserData} from '../../redux/actions/User';
import {TransferAmount} from '../../screen/user';

const ContactList = (props) => {
  LogBox.ignoreAllLogs(true);
  const {namesearch, navigation} = props;

  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const {getalluserdata} = useSelector((state) => state.User);

  const renderItem = ({item}) => {
    // console.log(navigation.navigate(TransferAmount), 'sdasjdiqwhdiuauid');
    return (
      <TouchableOpacity
        style={style.itemList}
        onPress={() => {
          // dispatch(getContactIdCreator(item.id, token));
          props.navigation.goBack();
          // props.navigation.navigate('TransferAmount');
        }}>
        <View style={style.user}>
          <Image source={avatar} style={style.imgList} />
          <View style={style.userName}>
            <Text style={{color: '#4D4B57', fontSize: 16}}>
              {item.first_name}
            </Text>
            <Text style={{color: '#7A7886', fontSize: 14}}>{item.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setLoading(true);
    dispatch(GetAllUserData(token, namesearch, page));
    setLoading(false);
  }, [dispatch, token, namesearch, page]);
  console.log(page, 'contactlist');

  // const loadMore = () => {
  //   // if (isScrolling) return false;
  //   setScrolling(true);
  //   setPage((prevPage) => prevPage + 1);
  //   // setLoading(true);
  //   dispatch(GetAllUserData(token, namesearch, page, false));
  //   // setTimeout(() => {
  //   //   setScrolling(false);
  //   //   if (getalluserdata.length < (page - 0) * 4) return setMore(false);
  //   // }, 1500);
  // };

  const handleScroll = (event) => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={getalluserdata}
        style={style.flatList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={4}
      />
    </SafeAreaView>
  );
};

export default ContactList;
