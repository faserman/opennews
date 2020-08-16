import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../redux/postsReducer';

type Props = {
  post: Post;
}

export default ({ post }: Props) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.result}
      onPress={ () => {
        navigation.navigate('PostInfo', { post: post });
      }}
    >
      <Text style={styles.textResult}>{ post.title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#49B8EC',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#333333'
  },
  textResult: {
    color: '#fff',
    fontSize: 17,
  }
})