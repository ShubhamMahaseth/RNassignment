import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import styles from './style';

const DataList = () => {
  const [list, setList] = useState([{}]);
  const [indicator, setIndicator] = useState(true);

  useEffect(() => {
    Axios.post('http://182.76.237.238/~apitest/sme_link/api/post_listing', {
      user_id: 92,
    })
      .then(res => {
        {
          setList(res.data.data), setIndicator(false);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const Delay = () => {
    return <ActivityIndicator size="large" animating={indicator} />;
  };

  const DataList = () => {
    return (
      <FlatList
        data={list}
        initialNumToRender={4}
        renderItem={item => (
          <View>
            <Image
              style={styles.image}
              source={
                item.item.images
                  ? {uri: item.item.images}
                  : {
                      uri: 'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg',
                    }
              }
            />
            <Text style={styles.text}>Name: {item.item.name}</Text>
            <Text style={styles.text}>Follow: {item.item.is_follow}</Text>
            <Text style={styles.text}>Like: {item.item.like_count}</Text>
            <Text style={styles.text}>
              Designation: {item.item.designation}
            </Text>
            <Text style={styles.text}>
              Description: {item.item.discription}
            </Text>
            <Text style={styles.text}>Time: {item.item.post_hour}</Text>
          </View>
        )}
      />
    );
  };

  let component;

  if (indicator) {
    component = <Delay />;
  } else {
    component = <DataList />;
  }

  return <View style={styles.container}>{component}</View>;
};

export default DataList;
