import React, {Fragment} from 'react';
import {TextInput} from 'react-native';
import styles from './style';

const CreatePost = ({
  textField,
  text,
  data,
  setData,
  field,
  keyboard = 'default',
  fieldHeight = 50,
  focus = false,
}) => {
  function onChange(value) {
    setData({...data, [field]: value});
  }
  return (
    <Fragment>
      <TextInput
        style={[styles.input, {height: fieldHeight}]}
        placeholderTextColor="gray"
        placeholder={textField}
        onChangeText={value => onChange(value)}
        value={text}
        keyboardType={keyboard}
        autoFocus={focus}
      />
    </Fragment>
  );
};

export default CreatePost;
