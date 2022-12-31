import React, {Fragment, useState} from 'react';
import {View, Text, Button, Pressable, TouchableHighlight} from 'react-native';
import Axios from 'axios';
import CreatePost from '../../components/CreatePost';
import styles from './style';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState({
    name: '',
    user_id: '92',
    post_type: '1',
    description: '',
    images: [
      'http://182.76.237.238/~apitest/sme_link/storage/app/post_image/16523577301205221JPEG_20220512_174513_7665785817951196834.jpg',
    ],
    videos:
      'http://182.76.237.238/~apitest/sme_link/storage/app/profile_image/16523585821205221638945964427.jpg',
    video_thumbnail:
      'http://182.76.237.238/~apitest/sme_link/storage/app/profile_image/16523585821205221638945964427.jpg',
  });

  async function handleData() {
    const newRecord = data;

    await Axios.post(
      'http://182.76.237.238/~apitest/sme_link/api/create_post',
      newRecord,
    )
      .then(res => {
        if (res) {
          navigation.navigate('Success');
        }
      })
      .catch(err => {
        if (err) {
          navigation.navigate('Error');
        }
      });
  }

  return (
    <View style={styles.container}>
      <CreatePost
        textField={'Enter Name'}
        text={data.name}
        data={data}
        setData={setData}
        field={'name'}
      />
      <CreatePost
        textField={'User Id'}
        text={data.user_id}
        data={data}
        setData={setData}
        field={'user_id'}
        keyboard={'numeric'}
      />
      <CreatePost
        textField={'Post Type'}
        text={data.post_type}
        data={data}
        setData={setData}
        field={'post_type'}
        keyboard={'numeric'}
      />
      <CreatePost
        textField={'Description'}
        text={data.description}
        data={data}
        setData={setData}
        field={'description'}
        fieldHeight={90}
      />
      <CreatePost
        textField={'Images'}
        text={data.images[0]}
        data={data}
        setData={setData}
        field={'images'}
      />
      <CreatePost
        textField={'Video'}
        text={data.videos}
        data={data}
        setData={setData}
        field={'videos'}
      />
      <CreatePost
        textField={'Video Thumbnail'}
        text={data.video_thumbnail}
        data={data}
        setData={setData}
        field={'video_thumbnail'}
      />

      <Button
        title="post data"
        style={[styles.button, {backgroundColor: 'gray'}]}
        // disabled
        onPress={() => handleData()}></Button>
      <TouchableHighlight
        style={[styles.button, {backgroundColor: '#437cdeaa'}]}
        onPress={() => navigation.navigate('Data List')}
        activeOpacity={1}>
        <Text style={styles.text}>Get Data</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
