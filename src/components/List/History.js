import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import style from './style';
import avatar from '../../assets/img/user_.webp';
import {useSelector, useDispatch} from 'react-redux';
import {HistoryTransfer} from '../../redux/actions/Transfer';

function History(params) {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const {userdata} = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(HistoryTransfer(token));
  }, [token]);
  const {transferhistory} = useSelector((state) => state.Transfer);

  const renderItem = ({item}) => {
    return (
      <View style={style.itemList}>
        <View style={style.user}>
          {item.photo === null ? (
            <Image source={avatar} style={style.imgList} />
          ) : item.profile_id === userdata.id ? (
            <Image source={{uri: item.from_photo}} style={style.imgList} />
          ) : (
            <Image source={{uri: item.to_photo}} style={style.imgList} />
          )}
          <View style={style.userName}>
            <Text style={{color: '#4D4B57', fontSize: 16}}>
              {item.profile_id === userdata.id ? item.to_ : item.from_}
            </Text>
            <Text style={{color: '#7A7886', fontSize: 14}}>
              {item.profile_id === userdata.id ? item.trans_name : 'receiver'}
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          {item.profile_id === userdata.id ? (
            <Text style={{color: '#FF5B37', fontSize: 18}}>
              -Rp {item.amount.toLocaleString('id-ID')}
            </Text>
          ) : (
            <Text style={{color: '#1EC15F', fontSize: 18}}>
              +Rp {item.amount.toLocaleString('id-ID')}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View>
      {!transferhistory ? (
        <Text>Data empty</Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={true}
          style={style.flatList}
          data={transferhistory}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          // ListHeaderComponent={<Text>loading..</Text>}
          // ListFooterComponent={<Text>loading..</Text>}
        />
      )}
    </View>
  );
}

export default History;
