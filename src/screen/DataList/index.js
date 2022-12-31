import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './style';

const DataList = () => {
  const [list, setList] = useState([{}]);

  useEffect(() => {
    Axios.post('http://182.76.237.238/~apitest/sme_link/api/post_listing', {
      user_id: 1,
    })
      .then(res => setList(res.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={
          item => (
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
            </View>
          )
          //   console.log(item.item.images)
        }
      />
    </View>
  );
};

export default DataList;
